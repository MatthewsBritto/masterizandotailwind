import { LogOut } from 'lucide-react'

export default function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="http://github.com/matthewsbritto.png"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Matthews Britto
        </span>
        <span className="truncate text-sm text-zinc-500">
          Luismatthews29@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-100"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
