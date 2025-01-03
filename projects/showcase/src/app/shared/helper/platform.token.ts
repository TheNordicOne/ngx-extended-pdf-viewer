import { isPlatformBrowser } from '@angular/common';
import { inject, InjectionToken, PLATFORM_ID, signal, WritableSignal } from '@angular/core';

export const PLATFORM_TOKEN = new InjectionToken<WritableSignal<string>>('PlatformToken', {
  providedIn: 'root',
  factory: () => {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      if ('userAgentData' in window.navigator) {
        return signal((window.navigator.userAgentData as { platform: string }).platform);
      }
      return signal(navigator.platform);
    }
    return signal('unknown');
  },
});
