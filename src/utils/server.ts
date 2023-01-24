export const showServerErrors = (
  callback: any,
  messages: string | string[],
) => {
  const isSeveralErrors = Array.isArray(messages);

  if (isSeveralErrors) {
    messages.forEach((message) => {
      callback(message);
    });
  } else {
    callback(messages);
  }
};
