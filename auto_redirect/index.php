<?php
$links = [
  "https://videoapps.club/auto_redirect/post-1",
  "https://videoapps.club/auto_redirect/post-2",
  "https://videoapps.club/auto_redirect/post-3",
  "https://videoapps.club/auto_redirect/post-4"
];

$randomLink = $links[array_rand($links)];
header("Location: $randomLink", true, 302);
exit;
