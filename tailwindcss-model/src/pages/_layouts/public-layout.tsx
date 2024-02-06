import { Outlet } from 'react-router-dom'

export function PublicLayout() {
  return (
    <div>
      <h1>PUBLIC LAYOUT</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
