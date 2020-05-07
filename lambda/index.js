const Alexa = require("ask-sdk-core");

const GetNewFactHandler = require("./handlers/getNewFactHandler");
const HelpHandler = require("./handlers/HelpHandler");
const FallbackHandler = require("./handlers/FallbackHandler");
const ExitHandler = require("./handlers/ExitHandler");
const SessionEndedRequestHandler = require("./handlers/sessionEndedRequestHandler");
const ErrorHandler = require("./handlers/errorHandler");

const LocalizationInterceptor = require("./interterceptors/localizationInterceptor");

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    FallbackHandler,
    SessionEndedRequestHandler
  )
  .addRequestInterceptors(LocalizationInterceptor)
  .addErrorHandlers(ErrorHandler)
  .withCustomUserAgent("sample/basic-fact/v2")
  .lambda();
