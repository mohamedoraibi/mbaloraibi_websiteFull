export type AnalyticsEvent = 'consultation_booking_click'|'contact_form_submit'|'course_interest_submit'|'service_cta_click'|'project_view'|'language_switch'|'outbound_social_click'
export function trackEvent(name: AnalyticsEvent, params?: Record<string, string | number | boolean | undefined>) {
  if (typeof window === 'undefined') return
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
  gtag?.('event', name, params ?? {})
}
