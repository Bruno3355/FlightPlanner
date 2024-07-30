export const converTimeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export const minimumRequiredTime = (
  step: any | number,
  alternate: any,
  reserve: any
) => {
  if (step && alternate && reserve) {
    const totalMinutes = step + alternate + reserve;
    const hours = String(Math.floor(totalMinutes / 60));
    const minutes = String(totalMinutes % 60);
    return `${hours.padStart(2, "0")}:${minutes.padEnd(2, "0")}`;
  } else {
    return "";
  }
};

export const verifyIfValueIsNumber = (value: any) => {
  return typeof value === "number" && !Number.isNaN(value);
};

export const totalGallonsPerMinute = (obj: any) => {
  const value = obj;
  if(value && typeof value === "number" && !Number.isNaN(value)){
    return Number((value * 0.2).toFixed(2));
  } else {
    return -1;
  }
};

export const totalOnBoard = (
  step: any,
  alternate: any,
  reserve: any,
  additional: any
) => {
  if (step && alternate && reserve && additional) {
    const totalMinutes = step + alternate + reserve + additional;
    const hours = String(Math.floor(totalMinutes / 60));
    const minutes = String(totalMinutes % 60);
    return `${hours.padStart(2, "0")}:${minutes.padEnd(2, "0")}`;
  } else {
    return "";
  }
};