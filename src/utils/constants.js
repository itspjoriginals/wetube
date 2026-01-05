export const HAMBURGER_ICON = 'https://cdn-icons-png.freepik.com/512/8182/8182885.png';

export const YT_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png';

export const USER_ICON = 'https://img.freepik.com/premium-vector/user-icon-vector_1272330-86.jpg';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos" +
  "?part=snippet,contentDetails,statistics" +
  "&chart=mostPopular" +
  "&maxResults=50" +
  "&regionCode=IN" +
  "&key=" + API_KEY;
