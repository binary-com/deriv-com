const { createClient } = require('@vercel/client')

const client = createClient()

async function getPreviews() {
  const previews = await client.getPreviews()
  return previews
}

async function deleteOldPreviews() {
  const previews = await getPreviews()
  console.log(`Found ${previews.length} previews`);
  const sixMonthsAgo = new Date(Date.now() - 15552000000) // 15552000000ms = 6 months

  previews.forEach(preview => {
    if (new Date(preview.createdAt) < sixMonthsAgo) {
      console.log(`Deleting preview ${preview.url}`)
      //client.deletePreview(preview.id)
    }
  })
}

deleteOldPreviews()