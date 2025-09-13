// This file is a Vercel Serverless Function that pings your Render server.
// It is designed to be called by an external monitoring service.

import fetch from 'node-fetch';

export default async function handler(req, res) {
  // Replace this URL with the URL of your Render application.
  const renderServerUrl = 'https://n8n-1-x6d9.onrender.com';

  console.log(`Pinging Render server at: ${renderServerUrl}`);

  try {
    const response = await fetch(renderServerUrl, {
      method: 'GET',
      timeout: 10000 // Set a timeout of 10 seconds
    });

    if (response.ok) {
      console.log('Successfully pinged Render server.');
      res.status(200).send('Successfully pinged Render server.');
    } else {
      console.error(`Failed to ping Render server. Status: ${response.status}`);
      res.status(500).send(`Failed to ping Render server. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }
}
