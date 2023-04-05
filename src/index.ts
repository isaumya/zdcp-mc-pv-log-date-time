import { Manager, MCEvent } from '@managed-components/types'

export default async function (manager: Manager) {
  manager.addEventListener('pageview', (event: MCEvent) => {
    const { client } = event
    const eventDate = new Date()
    client.execute(
      `console.info("⏰ The logged Date & Time of the Pageview event is ➡️ ${eventDate}")`
    )
  })
}
