import { redirect } from 'next/navigation'

export default function Logout() {
  // Handle proper logout here
  redirect('/')
}