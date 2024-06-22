// import Analytics from 'appcenter-analytics';

enum DebugStyle {
  DEFAULT = 'color: Orchid;',
  INFO = 'color: SkyBlue;',
  WARN = 'color: Khaki;',
  ERROR = 'color: red;',
  API_SUCCESS = 'color: PaleGreen;',
  API_ERROR = 'color: red;',
  SUCCESS = 'color: PaleGreen;',
}

export const newConsole = function () {
  const finishText = (variant: DebugStyle, text: string) => {
    switch (variant) {
      case DebugStyle.SUCCESS:
        return `✅[SUCCESS] ${text}`;
      case DebugStyle.ERROR:
        return `🆘[ERROR] ${text}`;
      case DebugStyle.WARN:
        return `[WARN] ${text}`;
      case DebugStyle.INFO:
        return `[INFO] ${text}`;
      case DebugStyle.API_SUCCESS:
        return `[API SUCCESS] ${text}`;
      case DebugStyle.API_ERROR:
        return `🆘[API ERROR] ${text}`;
      default:
        return text;
    }
  };

  const handleConsole = (color: DebugStyle, text: string, data?: unknown) => {
    if (__DEV__) {
      // return null;
      // eslint-disable-next-line no-console
      return console.log(
        '%c%s',
        color,
        finishText(color, text),
        data ? '=> ' : '',
        data || '',
      );
    }
    // const trak =
    //   typeof data === 'object' && data !== null
    //     ? convertToTypeScriptObject(data)
    //     : undefined;
    //
    // Analytics.trackEvent(text, trak);
  };

  return {
    log(text: string, data: unknown) {
      handleConsole(DebugStyle.DEFAULT, text, data);
    },
    info(text: string, data?: unknown) {
      handleConsole(DebugStyle.INFO, text, data);
    },
    warn(text: string, data?: unknown) {
      handleConsole(DebugStyle.WARN, text, data);
    },
    error(text: string, data?: unknown) {
      handleConsole(DebugStyle.ERROR, text, data);
    },
    success(text: string, data?: unknown) {
      handleConsole(DebugStyle.SUCCESS, text, data);
    },
    api_success(text: string, data?: unknown) {
      handleConsole(DebugStyle.API_SUCCESS, text, data);
    },
    api_error(text: string, data?: unknown) {
      handleConsole(DebugStyle.API_ERROR, text, data);
    },
  };
};
