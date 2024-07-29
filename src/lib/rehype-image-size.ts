import getImageSize from 'image-size'
import { visit } from 'unist-util-visit'

/**
 * Applies image size properties to HTML and MDX image elements.
 *
 * @param options - The options for configuring the image size calculation.
 * @returns A function that can be used as a rehype plugin.
 */
export function rehypeImageSize(options) {
  return (tree) => {
    // This matches all images that use the markdown standard format ![label](path).
    visit(tree, { type: 'element', tagName: 'img' }, (node) => {
      if (Boolean(node.properties.width) || Boolean(node.properties.height)) {
        return
      }

      const imagePath = `${String(options?.root) ?? ''}${String(node.properties.src)}`
      const imageSize = getImageSize(imagePath)
      node.properties.width = imageSize.width
      node.properties.height = imageSize.height
    })

    // This matches all MDX' <Image /> components.
    // Feel free to update it if you're using a different component name.
    visit(tree, { type: 'mdxJsxFlowElement', name: 'Image' }, (node) => {
      const srcAttribute = node.attributes?.find((attribute) => attribute.name === 'src')
      const imagePath = `${String(options?.root) ?? ''}${String(srcAttribute.value)}`
      const imageSize = getImageSize(imagePath)
      const widthAttribute = node.attributes?.find((attribute) => attribute.name === 'width')
      const heightAttribute = node.attributes?.find((attribute) => attribute.name === 'height')

      if (Boolean(widthAttribute) || Boolean(heightAttribute)) {
        // If `width` or `height` have already been set explicitly we
        // don't want to override them.
        return
      }

      node.attributes.push({
        type: 'mdxJsxAttribute',
        name: 'width',
        value: imageSize.width,
      })
      node.attributes.push({
        type: 'mdxJsxAttribute',
        name: 'height',
        value: imageSize.height,
      })
    })
  }
}
