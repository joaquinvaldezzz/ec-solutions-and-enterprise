import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Container, Section } from '../ui/container'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const formSchema = z.object({
  first_name: z.string().min(4),
  last_name: z.string().min(4),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
  terms: z.boolean().refine((value) => value, {
    message: 'You must accept the privacy policy.',
  }),
})
type FormSchema = z.infer<typeof formSchema>

export function ContactUs() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      message: '',
      terms: false,
    },
  })

  function onSubmit(values: FormSchema) {
    console.log(values)
  }

  return (
    <Section asChild>
      <section>
        <Container>
          <div className="text-center">
            <h2 className="text-display-sm font-semibold">Contact us</h2>
            <p className="mt-4 text-lg text-gray-600">
              You can reach us anytime via{' '}
              <Button size="lg" heirarchy="link-color" asChild>
                <a href="mailto:hi@untitledui.com">hi@untitledui.com</a>
              </Button>
            </p>
          </div>

          <Form {...form}>
            <form
              className="mt-12 flex flex-col gap-6"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={form.handleSubmit(onSubmit as unknown as SubmitHandler<FormSchema>)}
            >
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input padding="md" type="text" placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input padding="md" type="text" placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input padding="md" type="email" placeholder="you@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Leave us a message..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-3">
                      <FormControl>
                        <Checkbox
                          className="mt-0.5"
                          size="md"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-md font-normal text-gray-700">
                        You agree to our friendly{' '}
                        <Button
                          className="font-normal underline"
                          size="lg"
                          heirarchy="link-gray"
                          asChild
                        >
                          <Link href="#">privacy policy</Link>
                        </Button>
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="xl">
                Send message
              </Button>
            </form>
          </Form>
        </Container>
      </section>
    </Section>
  )
}
