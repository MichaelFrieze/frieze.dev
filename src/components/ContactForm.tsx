import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, type Resolver } from 'react-hook-form'
import { z } from 'zod'

import { Button, buttonVariants } from '@/components/ui/button'
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
import { cn } from '@/lib/utils'
import { CheckCircle2 } from 'lucide-react'

const schema = z.object({
  name: z
    .string()
    .min(2, { error: 'Please enter at least 2 characters.' })
    .max(100, { error: 'Name is too long.' }),
  email: z.email({ error: 'Please enter a valid email.' }),
  subject: z
    .string()
    .min(2, { error: 'Please enter a subject.' })
    .max(140, { error: 'Subject is too long.' }),
  message: z
    .string()
    .min(10, { error: 'Please enter at least 10 characters.' })
    .max(5000, { error: 'Message is too long.' }),
  botcheck: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function ContactForm({ className }: { className?: string }) {
  const form = useForm<FormValues>({
    resolver: (
      zodResolver as unknown as (schema: unknown) => Resolver<FormValues>
    )(schema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      botcheck: '',
    },
    mode: 'onTouched',
  })

  const [isSuccess, setIsSuccess] = useState(false)
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  async function onSubmit(values: FormValues) {
    if (values.botcheck?.trim() !== '') {
      return
    }
    const payload = {
      access_key: '1be29f56-a4ae-412d-b6b2-5dee6ab55c01',
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
      botcheck: values.botcheck,
      from_name: values.name,
      site: 'frieze.dev',
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = (await res.json()) as { success?: boolean }

      if (data?.success) {
        setIsSuccess(true)
        setSubmittedName(values.name)
        form.reset()
      } else {
        form.setError('root', {
          message: 'Something went wrong. Please try again.',
        })
      }
    } catch {
      form.setError('root', { message: 'Network error. Please try again.' })
    }
  }

  if (isSuccess) {
    return (
      <div
        className={cn(
          'flex w-full flex-col items-stretch gap-6 rounded-lg',
          className,
        )}
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="text-primary size-6" />
          <p className="text-base font-medium">
            Thanks{submittedName ? `, ${submittedName}` : ''}! Your message has
            been sent.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="/"
            className={buttonVariants({
              variant: 'default',
              size: 'sm',
              className: 'bg-card cursor-pointer',
            })}
          >
            Back To Home
          </a>
          <Button
            size="sm"
            variant="outline"
            className="bg-card cursor-pointer"
            onClick={() => setIsSuccess(false)}
          >
            Send another message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('space-y-4', className)}
        noValidate
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} autoComplete="name" />
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
                <Input {...field} type="email" autoComplete="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Textarea {...field} rows={6} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Honeypot field for spam prevention */}
        <input
          type="text"
          {...form.register('botcheck')}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {form.formState.errors.root?.message && (
          <p className="text-destructive text-sm font-medium">
            {form.formState.errors.root.message}
          </p>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="cursor-pointer"
          >
            {form.formState.isSubmitting ? 'Sending…' : 'Send message'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
