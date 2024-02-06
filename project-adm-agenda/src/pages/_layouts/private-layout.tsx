import { Outlet } from 'react-router-dom'

export function PrivateLayout() {
  return (
    <div>
      <h1>PRIVATE LAYOUT</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
