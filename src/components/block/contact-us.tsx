'use client'

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
import { labelVariants } from '../ui/label'
import { Textarea } from '../ui/textarea'

const formSchema = z.object({
  first_name: z.string().min(4),
  last_name: z.string().min(4),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
  terms: z.boolean().refine((value) => value, {
    message: 'You must accept the privacy policy.',
  }),
})
type FormSchema = z.infer<typeof formSchema>

interface Service {
  id: string
  label: string
}

const services: Service[] = [
  {
    id: 'web-design',
    label: 'Web design',
  },
  {
    id: 'ux-design',
    label: 'UX design',
  },
  {
    id: 'user-research',
    label: 'User research',
  },
  {
    id: 'content-creation',
    label: 'Content creation',
  },
  {
    id: 'strategy-and-consulting',
    label: 'Strategy and consulting',
  },
  {
    id: 'other',
    label: 'Other',
  },
]

export function ContactUs() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      message: '',
      items: [],
      terms: false,
    },
  })

  function onSubmit(values: FormSchema) {
    console.log(values)
  }

  return (
    <Section id="contact-us">
      <Container>
        <div className="text-center">
          <h2 className="text-display-sm font-semibold lg:text-display-md lg:tracking-tight">
            Contact us
          </h2>
          <p className="mt-4 text-lg text-gray-600 lg:text-xl">
            You can reach us anytime via{' '}
            <Button size="lg" heirarchy="link-color" asChild>
              <a href="mailto:hi@untitledui.com">hi@untitledui.com</a>
            </Button>
          </p>
        </div>

        <Form {...form}>
          <form
            className="mx-auto mt-12 flex max-w-2xl flex-col gap-6"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={form.handleSubmit(onSubmit as unknown as SubmitHandler<FormSchema>)}
          >
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input padding="md" type="text" placeholder="John" {...field} />
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
                      <Input padding="md" type="text" placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input padding="md" type="email" placeholder="johndoe@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input padding="md" type="tel" placeholder="+1 (555) 000-0000" {...field} />
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

            <fieldset>
              <legend className={labelVariants()}>Services</legend>
              <div className="mt-4">
                <FormField
                  control={form.control}
                  name="items"
                  render={() => (
                    <FormItem className="grid gap-x-8 gap-y-4 space-y-0 md:grid-cols-2 lg:gap-x-16">
                      {services.map((service) => (
                        <FormField
                          control={form.control}
                          name="items"
                          key={service.id}
                          render={({ field }) => (
                            <FormItem className="flex gap-3 space-y-0" key={service.id}>
                              <FormControl>
                                <Checkbox
                                  className="mt-0.5"
                                  size="md"
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    checked === true
                                      ? field.onChange([...field.value, service.id])
                                      : field.onChange(
                                          field.value?.filter((value) => value !== service.id),
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-md text-gray-700">
                                {service.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>

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
            <Button className="mt-2" type="submit" size="xl">
              Send message
            </Button>
          </form>
        </Form>
      </Container>
    </Section>
  )
}
