import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function handleContactForm(formData: FormData) {
  'use server'
  const name = formData.get('name') as string;
  const company = formData.get('company') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const inquiryType = formData.get('inquiryType') as string;
  const message = formData.get('message') as string;

  // Here you can do: save to DB, send an email, log data, etc.
  console.log({ name, company, email, phone, inquiryType, message });

  // Optionally revalidate or redirect
  revalidatePath('/contact');
  redirect('/contact?submitted=true');
}