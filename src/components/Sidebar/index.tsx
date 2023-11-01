import { Search } from 'lucide-react'
import { InputControl, InputPrefix, InputRoot } from './Input.tsx'
import { Logo } from './Logo'
import MainNavigation from './MainNavigation'

import UsedSpaceWidget from './UsedSpaceWidget'

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>

      <MainNavigation />
      <UsedSpaceWidget />
    </aside>
  )
}
