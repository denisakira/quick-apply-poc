export const EventBus = {
  $on(eventType: string, callback: (data: unknown) => void) {
    document.addEventListener(eventType, (ev: CustomEvent) =>
      callback(ev.detail),
    );
  },
  $dispatch(eventType: string, data?: unknown) {
    const event = new CustomEvent(eventType, { detail: data });
    document.dispatchEvent(event);
  },
  $remove(eventType: string, callback?: (data: unknown) => void) {
    document.removeEventListener(eventType, callback);
  },
};
