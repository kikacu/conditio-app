export function getPort(process?: NodeJS.Process): number {
  return parseInt((process && process.env.PORT) || "8080", 10);
}
