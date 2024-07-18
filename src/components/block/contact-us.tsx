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
import { Container, Section } from '../ui/container'
import { Input } from '../ui/input'

const formSchema = z.object({
  first_name: z.string().min(4),
  last_name: z.string().min(4),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
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
              <a className="font-medium text-brand-700" href="mailto:hi@untitledui.com">
                hi@untitledui.com
              </a>
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
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Input
                        padding="md"
                        type="text"
                        placeholder="Leave us a message..."
                        {...field}
                      />
                    </FormControl>
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
