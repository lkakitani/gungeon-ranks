export const testGet = (req, res) => {
  res.json({ teste: 'ok get' });
}

export const testPost = (req, res) => {
  res.json({ teste: 'ok post' });
}

export function addNewDownload(req, res) {
  let newDownload = new Download(req.body)
  newDownload.save((error, download) => {
    if (error) { res.json(error) }
    res.json(download)
  })
}

// get all downloads from the database
export function getDownloads(req, res) {
  Download.find({}, (error, downloads) => {
    if (error) { res.json(error) }
    res.json(downloads)
  })
}

// get single download based on the id
export function getDownload(req, res) {
  Download.findById(req.params.id, (error, download) => {
    if (error) { res.json(error) }
    res.json(download)
  })
}

// update the download information based on id
export function updateDownload(req, res) {
  Download.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, download) => {
    if (error) { res.json(error) }
    res.json(download)
  })
}

// delete the download from the database.
export function deleteDownload(req, res) {
  Download.remove({ _id: req.params.id }, (error, download) => {
    if (error) { res.json(error) }
    res.json(download)
  })
}