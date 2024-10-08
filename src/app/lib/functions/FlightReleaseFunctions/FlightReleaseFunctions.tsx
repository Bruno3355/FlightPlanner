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
    return 0;
  }
};

export  const totalBoardGallons = (additional: any, minimumRequired: any) => {
  if (
    verifyIfValueIsNumber(additional) &&
    minimumRequired &&
    verifyIfValueIsNumber(minimumRequired) &&
    additional
  ) {
    const totalGallons = totalGallonsPerMinute(additional)
    return (
      minimumRequired +
      totalGallons
    );
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

export const valueToFixed = (value: any, length = 2) => {
  if(verifyIfValueIsNumber(value)){
    return value.toFixed(length)
  } else {
    return ""
  }
}