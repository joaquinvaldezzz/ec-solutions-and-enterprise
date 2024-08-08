'use client'

import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { Headset, Mail, MapPin } from 'lucide-react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Container, Section } from '@/components/ui/container'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  first_name: z.string().min(1, { message: 'Let us know your first name.' }),
  last_name: z.string().min(1, { message: 'Let us know your last name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  message: z.string().min(1, { message: 'Please enter a message.' }),
  terms: z.boolean().refine((value) => value, {
    message: 'You must accept the privacy policy.',
  }),
})
type FormSchema = z.infer<typeof formSchema>

export default function Page() {
  const form = useForm<FormSchema>({
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
    <div className="mt-header-height">
      <Section>
        <Container>
          <h1 className="text-sm font-semibold text-brand-700 lg:text-md">Contact us</h1>
          <p className="mt-3 text-display-sm font-semibold lg:text-display-md lg:tracking-tight">
            Chat to our friendly team
          </p>
          <p className="mt-4 text-lg text-gray-600 lg:mt-5 lg:text-xl">
            We&apos;d love to hear from you. Please fill out this form or shoot us an email.
          </p>

          <div className="mt-12 grid gap-y-12 lg:mt-16 lg:grid-cols-2 lg:gap-x-16">
            <dl className="grid gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-1 xl:grid-cols-2 xl:content-start">
              <div>
                <MapPin className="size-6 stroke-brand-600" size={24} />
                <dt className="mt-3 text-lg font-semibold lg:mt-4 lg:text-xl">Office address</dt>
                <p className="mt-1 text-gray-600 lg:mt-2">Come say hello at our office HQ.</p>
                <dd className="mt-3 lg:mt-4">
                  <Button size="lg" hierarchy="link-color" asChild>
                    <address className="not-italic">Quezon City</address>
                  </Button>
                </dd>
              </div>

              <div>
                <Mail className="size-6 stroke-brand-600" size={24} />
                <dt className="mt-3 text-lg font-semibold lg:mt-4 lg:text-xl">Email address</dt>
                <p className="mt-1 text-gray-600 lg:mt-2">Our friendly team is here to help.</p>
                <dd className="mt-3 lg:mt-4">
                  <Button className="break-all" size="lg" hierarchy="link-color" asChild>
                    <a href="mailto:bert.chua@ecsolutionsconsulting.com">
                      bert.chua@ecsolutionsconsulting.com
                    </a>
                  </Button>
                </dd>
              </div>

              <div>
                <Headset className="size-6 stroke-brand-600" size={24} />
                <dt className="mt-3 text-lg font-semibold lg:mt-4 lg:text-xl">Mobile number</dt>
                <p className="mt-1 text-gray-600 lg:mt-2">Our friendly team is here to help.</p>
                <Button
                  className="mt-3 slashed-zero lg:mt-4"
                  size="lg"
                  hierarchy="link-color"
                  asChild
                >
                  <dd>+63 917 551 0320</dd>
                </Button>
              </div>
            </dl>

            <Form {...form}>
              <form
                className="flex flex-col gap-6 xl:rounded-2xl xl:bg-gray-50 xl:px-8 xl:py-10"
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
                        <Input
                          padding="md"
                          type="email"
                          placeholder="johndoe@company.com"
                          {...field}
                        />
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
                        <Input padding="md" type="tel" placeholder="+63 912 234 5678" {...field} />
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
                            hierarchy="link-gray"
                            asChild
                          >
                            <Link href="/privacy-policy">privacy policy</Link>
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
          </div>
        </Container>
      </Section>
    </div>
  )
}
