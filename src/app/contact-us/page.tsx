import { type Metadata } from 'next'

import { ContactUs } from '@/components/block/contact-us'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "We'd love to hear from you. Please fill out this form or shoot us an email.",
  openGraph: {
    title: 'Contact Us',
    description: "We'd love to hear from you. Please fill out this form or shoot us an email.",
  },
}

export default function Page() {
  return <ContactUs />
}
