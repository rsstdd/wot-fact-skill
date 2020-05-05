module.exports.GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    // checks request type
    return (
      request.type === "LaunchRequest" ||
      (request.type === "IntentRequest" &&
        request.intent.name === "GetNewFactIntent")
    );
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    // gets a random fact by assigning an array to the variable
    // the random item from the array will be selected by the i18next library
    // the i18next library is set up in the Request Interceptor
    const randomFact = requestAttributes.t("FACTS");
    // concatenates a standard message with the random fact
    const speakOutput = requestAttributes.t("GET_FACT_MESSAGE") + randomFact;

    return (
      handlerInput.responseBuilder
        .speak(speakOutput)
        // Uncomment the next line if you want to keep the session open so you can
        // ask for another fact without first re-opening the skill
        // .reprompt(requestAttributes.t('HELP_REPROMPT'))
        .withSimpleCard(requestAttributes.t("SKILL_NAME"), randomFact)
        .getResponse()
    );
  },
};
