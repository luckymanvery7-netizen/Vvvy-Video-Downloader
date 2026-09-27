// Vvvy YouTube Video Downloader — backend edge function
//
// This function validates incoming download requests. It does NOT fetch
// or return video data. Actual video retrieval must be implemented with
// server-side authorization checks that confirm the requesting user owns
// or is authorized to download the requested content. The function
// never bypasses DRM, access controls, or YouTube restrictions.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const YOUTUBE_URL_REGEX =
  /^(https?:\/\/)?(www\.youtube\.com\/(watch\?v=|shorts\/)|youtu\.be\/)[\w-]{11}/;

const VALID_QUALITIES = new Set(["360p", "720p", "1080p"]);

interface RequestBody {
  url: string;
  quality: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." });
  }

  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return jsonResponse(400, { error: "Invalid JSON body." });
  }

  const { url, quality } = body;

  if (typeof url !== "string" || !YOUTUBE_URL_REGEX.test(url.trim())) {
    return jsonResponse(400, {
      error: "Invalid YouTube URL. Provide a youtube.com/watch, youtu.be, or /shorts/ link.",
    });
  }

  if (typeof quality !== "string" || !VALID_QUALITIES.has(quality)) {
    return jsonResponse(400, {
      error: "Invalid quality. Choose 360p, 720p, or 1080p.",
    });
  }

  // TODO: Implement authorized retrieval here.
  // Before returning any downloadable content, verify server-side that the
  // requesting user owns or is authorized to download this video. Do not
  // bypass DRM, access controls, authentication, or YouTube restrictions.

  return jsonResponse(200, {
    state: "complete",
    progress: 100,
    message:
      "Request validated. Authorized download pipeline not yet configured.",
  });
});

function jsonResponse(status: number, data: Record<string, unknown>): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
}
