export const CRISIS_REGEX = /(suicide|kill myself|self[- ]?harm|end my life|i want to die|don'?t want to live|overdose|cutting|suicidio|suicidarme|matarme|autolesión|auto[- ]?lesión|terminar con mi vida|quiero morir|no quiero vivir|sobredosis|cortarme|hacerme daño)/i;

export function isCrisis(message: string) {
  const m = message?.match(CRISIS_REGEX);
  return { isCrisis: !!m, matched: m?.[0] || null };
}

