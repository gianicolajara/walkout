const secondTime = [
  ["second", 1],
  ["minute", 60],
  ["hour", 3600],
  ["day", 86400],
];

export const dateMiliToHuman = (mili, timeZone) => {
  return (
    Intl.DateTimeFormat("en-EN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: timeZone || "UTC",
    }).format(new Date(mili * 1000)) ?? ""
  );
};

export const timeMiliToHuman = (mili, timeZone) => {
  return (
    Intl.DateTimeFormat("en-EN", {
      timeStyle: "short",
      timeZone: timeZone || "UTC",
    }).format(new Date(mili * 1000)) ?? ""
  );
};

export const timeSecondToHuman = (seconds, timeZone) => {
  return (
    Intl.DateTimeFormat("en-EN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: timeZone || "UTC",
    }).format(new Date(seconds)) ?? ""
  );
};

export const dateSecondToHuman = (seconds, timeZone) => {
  return (
    Intl.DateTimeFormat("en-EN", {
      dateStyle: "short",
      timeZone: timeZone || "UTC",
    }).format(new Date(seconds * 1000)) ?? ""
  );
};

export const timeAgo = (timestamp) => {
  let timeTaked = 1;
  let nameTaked = "second";

  const timeStampNormalized = timestamp - Date.now() / 1000;

  for (const [day, time] of secondTime) {
    if (Math.abs(timeStampNormalized) > time) {
      timeTaked = time;
      nameTaked = day;
    }
  }

  const lessTime = Math.ceil(timeStampNormalized / timeTaked);

  const rtf1 = new Intl.RelativeTimeFormat("en", { style: "long" });
  return rtf1.format(lessTime, nameTaked);
};
