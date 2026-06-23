import fs from "fs";
import { anthropic } from "@ai-sdk/anthropic";
import { openai, createOpenAI } from "@ai-sdk/openai";
// import { google } from "@ai-sdk/google";
// import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { findSupportedChatModel, type SupportedChatModel, type SupportedChatModelId, type SupportedProvider, } from "@hex/shared";
// import type { ProviderOptions } from "@ai-sdk/provider-util";
import type { LanguageModel, Provider } from "ai";

// import { 
//     findSupportedChatModel,
//     isLocalModelId,
//     GLOBAL_CONFIG_FILE,
//     type Lo
//  }

type AnthropicModelId = Extract<SupportedChatModel, { provider: "anthropic" }>["id"];
type OpenAIModelId = Extract<SupportedChatModel, { provider: "openai" }>["id"];
type GoogleModelId = Extract<SupportedChatModel, { provider: "google" }>["id"];
type GeminiModelId = Extract<SupportedChatModel, { provider: "google" }>["id"];

export type ResolvedModel = {
    model: LanguageModel;
    provider: SupportedProvider;
    modelId: SupportedChatModelId;
    // modelId: string;
    // providerOptions?: ProviderOptions;
};


// Thinking is a provider-level capability - enabled for every model from provider
// const ANTHROPIC_THINKING: ProviderOptions = {
//     anthropic: { thinking: { type: "enabled", budgetTokens: 10000 } },
// }

// const GOOGLE_THINKING: ProviderOptions = {
//     google: { thinkingConfig: { thinkingBudget: 1000 } },
// }


// OpenAI: gpt-4o/mini have no thinking mode; o-series models reason by default — no options needed.

function assertUnsupportedProvider(provider: never): never {
    throw new Error(`Unsupported Provider: ${provider}`);
}

// function resolveAnthropicModel(modelId: AnthropicModelId): ResolvedModel {
//   if (!process.env.ANTHROPIC_API_KEY) {
//     const key = readConfigKey("anthropic");
//     if (key) process.env.ANTHROPIC_API_KEY = key;
//   }
//   if (process.env.ANTHROPIC_API_KEY) {
//     return {
//       model: anthropic(modelId),
//       provider: "anthropic",
//       modelId,
//       providerOptions: ANTHROPIC_THINKING,
//     };
//   }
//   return resolveViaOpenRouter(modelId, "anthropic");
// }

// function resolveGoogleModel(modelId: GoogleModelId): ResolvedModel {
//   if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
//     const key = readConfigKey("gemini");
//     if (key) process.env.GOOGLE_GENERATIVE_AI_API_KEY = key;
//   }
//   if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
//     return {
//       model: google(modelId),
//       provider: "google",
//       modelId,
//       providerOptions: GOOGLE_THINKING,
//     };
//   }
//   return resolveViaOpenRouter(modelId, "google");
// }

function resolveAnthropicModel(modelId: AnthropicModelId): ResolvedModel {
    return { 
        model: anthropic(modelId),
        provider: "anthropic",
        modelId,
     };
};


function resolveOpenAIModel(modelId: OpenAIModelId): ResolvedModel {
    return { 
        model: openai(modelId),
        provider: "openai",
        modelId,
     };
};


function resolveSupportedChatModel(model: SupportedChatModel): ResolvedModel {
  const provider = model.provider;

  switch (provider) {
    case "anthropic":
      return resolveAnthropicModel(model.id);
    case "openai":
      return resolveOpenAIModel(model.id);
    // case "google":
    //   return resolveGoogleModel(model.id);
    // case "openrouter":
    //   return resolveViaOpenRouter(model.id, "openrouter");
    default:
      return assertUnsupportedProvider(provider);
  }
};

export function isSupportedChatModel(modelId: string): modelId is SupportedChatModelId {
  return findSupportedChatModel(modelId) != null;
};

export function resolveChatModel(modelId: string): ResolvedModel {
  const model = findSupportedChatModel(modelId);
  if (!model) {
    throw new Error(`Unsupported model: ${modelId}`);
  }

  return resolveSupportedChatModel(model);
};
