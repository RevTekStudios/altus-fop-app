export async function mockUploadFile(fileName = 'prototype-file.pdf') {
  return Promise.resolve({
    success: true,
    fileName,
    path: `mock-uploads/${fileName}`,
  });
}

export async function mockGetDownloadUrl(path = 'mock-uploads/prototype-file.pdf') {
  return Promise.resolve({
    url: `https://demo.altusfop120.org/${path}`,
  });
}

// TODO: Replace mock upload and URL helpers with Firebase Storage APIs.
// TODO: Add file metadata, role-based access control, and upload progress handling.
