export const TRIAL_DURATION_DAYS = 14;

export function isTrialActive(trialEnds: Date): boolean {
  return new Date() < new Date(trialEnds);
}

export function getRemainingTrialDays(trialEnds: Date): number {
  const now = new Date();
  const end = new Date(trialEnds);
  const diffTime = end.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

export function getTrialEndDate(): Date {
  const date = new Date();
  date.setDate(date.getDate() + TRIAL_DURATION_DAYS);
  return date;
}
