export type NegotiationEndingType = "ideal" | "good" | "acceptable" | "bad" | "terrible";

export interface NegotiationChoice {
  id: string;
  text: string;
  next: string;
}

export interface NegotiationNode {
  id: string;
  scene?: string;
  character?: string;
  text: string;
  hint?: string;
  choices?: NegotiationChoice[];
  type?: "ending";
  endingCode?: string;
}

export interface NegotiationEnding {
  code: string;
  type: NegotiationEndingType;
  title: string;
  shortLabel: string;
  outcome: string;
  explanation: string;
  lessons: string[];
  points: number;
}

export interface NegotiationQuest {
  id: string;
  title: string;
  tagline: string;
  description: string;
  originalPrice: number;
  startNodeId: string;
  nodes: Record<string, NegotiationNode>;
  endings: Record<string, NegotiationEnding>;
}

export const perfectSuitQuest: NegotiationQuest = {
  id: "the-perfect-suit",
  title: "The Perfect Suit",
  tagline: "Read the room, control the frame, and negotiate the best deal.",
  description:
    "You are buying a business suit priced at $800. Your goal is to negotiate the strongest possible outcome without losing control of the conversation.",
  originalPrice: 800,
  startNodeId: "start",
  nodes: {
    start: {
      id: "start",
      scene:
        "You enter an upscale menswear store. Smooth jazz plays softly. A charcoal business suit stands on a mannequin with an $800 price tag. A polished salesperson approaches with a warm smile.",
      character: "Salesperson",
      text: "Good afternoon! Can I help you find something special today?",
      hint: "Set your frame first. You are not here because you need this suit. You are here to evaluate whether the deal is worth it.",
      choices: [
        { id: "start_A", text: "Yes, I'm looking at that suit on the mannequin. I'm interested.", next: "node_02" },
        { id: "start_B", text: "I'm just looking around, thank you.", next: "node_02b" },
        { id: "start_C", text: "That suit is perfect for me! I absolutely love it!", next: "node_02_bad" },
      ],
    },
    node_02: {
      id: "node_02",
      scene: "The salesperson removes the suit from the mannequin and holds it up for you.",
      character: "Salesperson",
      text: "Excellent choice. This is our premium Italian wool blend. It just arrived last week. Shall I find your size?",
      hint: "Questions create leverage. The person asking thoughtful questions usually controls the conversation.",
      choices: [
        { id: "node_02_A", text: "How long has this particular model been in stock?", next: "node_03" },
        { id: "node_02_B", text: "Yes, please. And tell me — what's the best price you can offer?", next: "node_03b" },
        { id: "node_02_C", text: "Sure. By the way, does the store do alterations?", next: "node_03c" },
        { id: "node_02_D", text: "Actually, do you have anything similar but maybe in a different style?", next: "node_substitute" },
      ],
    },
    node_02b: {
      id: "node_02b",
      scene: "You keep browsing. The salesperson gives you space, then steps back in.",
      character: "Salesperson",
      text: "That charcoal suit you were looking at is one of our finest pieces. Italian wool, hand-stitched lapels.",
      hint: "Now the seller is pursuing the sale. That gives you a stronger position than chasing the item yourself.",
      choices: [
        { id: "node_02b_A", text: "Mm. How long has it been here? I see some similar ones online.", next: "node_03" },
        { id: "node_02b_B", text: "It's nice. What's the price?", next: "node_03b" },
      ],
    },
    node_02_bad: {
      id: "node_02_bad",
      scene: "The salesperson smiles even wider. They can feel your enthusiasm.",
      character: "Salesperson",
      text: "I'm so glad you like it! Let me find your size right away. This suit really does look exceptional on the right person.",
      hint: "You revealed neediness too early. Try to recover balance before the seller rushes you to checkout.",
      choices: [
        { id: "node_02_bad_A", text: "Before we go further — what kind of flexibility do you have on price?", next: "node_03b" },
        { id: "node_02_bad_B", text: "Great, yes, let's try it on!", next: "node_bad_spiral" },
      ],
    },
    node_03: {
      id: "node_03",
      scene: "The salesperson pauses before answering.",
      character: "Salesperson",
      text: "We received this collection about six weeks ago. It's been very popular.",
      hint: "Six weeks is useful information. Inventory age and seasonal pressure are often where the real leverage lives.",
      choices: [
        { id: "node_03_A", text: "Six weeks. I see. Is this the end of the season collection, or ongoing?", next: "node_04" },
        { id: "node_03_B", text: "I see. Well, I've been looking at a few options. What can you do on the price?", next: "node_05" },
        { id: "node_03_C", text: "Popular with whom? Have you sold many this season?", next: "node_04" },
        { id: "node_03_D", text: "Oh, I also noticed some colourful new pieces — what are those?", next: "node_distract2" },
      ],
    },
    node_03b: {
      id: "node_03b",
      scene: "The salesperson straightens into a more formal posture.",
      character: "Salesperson",
      text: "The price is $800. However, we do have a loyalty program and occasional promotions. Are you a member?",
      hint: "This is a deflection. Do not let the conversation move from price authority to membership paperwork.",
      choices: [
        { id: "node_03b_A", text: "No. Let me ask differently — what's the lowest price you're authorised to offer?", next: "node_05" },
        { id: "node_03b_B", text: "I'm not interested in loyalty programs. I'm interested in this specific transaction.", next: "node_05" },
        { id: "node_03b_C", text: "Sure, sign me up! And what discount do members get?", next: "node_distract" },
      ],
    },
    node_03c: {
      id: "node_03c",
      scene: "The salesperson nods approvingly.",
      character: "Salesperson",
      text: "Yes, we have an excellent in-house tailor. Standard alterations are usually $60-80 extra. Shall I show you the fitting room?",
      hint: "Now you know alterations have real value. That gives you another lever besides sticker price.",
      choices: [
        { id: "node_03c_A", text: "Before the fitting — let's talk about the total package. What can you do on price?", next: "node_05" },
        { id: "node_03c_B", text: "Let me try it first.", next: "node_fitting" },
      ],
    },
    node_04: {
      id: "node_04",
      scene: "The salesperson glances toward the back office.",
      character: "Salesperson",
      text: "We've sold about half the collection. These things move at their own pace. Can I offer you some coffee while you look?",
      hint: "Hospitality can soften your negotiating edge. Also, half the collection still being there means unsold inventory is a pressure point.",
      choices: [
        { id: "node_04_A", text: "No thank you. So half is still here — that must be some pressure at the end of season?", next: "node_05_strong" },
        { id: "node_04_B", text: "Sure, coffee would be lovely. Black please.", next: "node_05_weak" },
        { id: "node_04_C", text: "No thanks. What price would make this suit move today?", next: "node_05_strong" },
      ],
    },
    node_fitting: {
      id: "node_fitting",
      scene: "You try the suit on. It fits remarkably well. The salesperson lights up.",
      character: "Salesperson",
      text: "It looks absolutely perfect on you. Really, I've never seen that suit look better on anyone.",
      hint: "Compliments are another tactic. Enjoy them if you want, but do not let them become your pricing logic.",
      choices: [
        { id: "node_fitting_A", text: "It's decent. I've seen similar cuts elsewhere. What's your best number?", next: "node_05" },
        { id: "node_fitting_B", text: "You're right, it does look great. I'll think about whether the price works.", next: "node_05" },
        { id: "node_fitting_C", text: "It really is perfect. Okay, let's talk numbers!", next: "node_05_weak" },
      ],
    },
    node_distract: {
      id: "node_distract",
      scene: "The salesperson walks you to a counter and starts filling in a loyalty form.",
      character: "Salesperson",
      text: "Members get 5% on future purchases. And today as a welcome bonus I can offer you an extra 10% — so the suit would be $720.",
      hint: "This sounds generous, but it is still a weak concession. Step back and regain control if you can.",
      choices: [
        { id: "node_distract_A", text: "Wait — let me step back. Ten percent isn't meaningful to me. Let's talk about real numbers.", next: "node_05" },
        { id: "node_distract_B", text: "That sounds reasonable. Okay, $720.", next: "END_B02" },
      ],
    },
    node_bad_spiral: {
      id: "node_bad_spiral",
      scene: "You try it on. It fits perfectly. The salesperson becomes even more attentive.",
      character: "Salesperson",
      text: "Wonderful! I'll have it wrapped. Will that be card or cash?",
      hint: "This is the assumption-of-sale move. The seller is skipping negotiation and pushing you straight into payment.",
      choices: [
        { id: "node_bad_spiral_A", text: "Hold on — we haven't discussed the price yet.", next: "node_05_weak" },
        { id: "node_bad_spiral_B", text: "Card please.", next: "END_B01" },
      ],
    },
    node_05_strong: {
      id: "node_05_strong",
      scene: "The salesperson pauses. You have their full attention now.",
      character: "Salesperson",
      text: "Well... I can offer you our standard seasonal discount. That would bring it to $680.",
      hint: "This is progress, but not the ceiling. Strong negotiators do not confuse the first real discount with the final one.",
      choices: [
        { id: "node_05_strong_A", text: "I appreciate that. That's not where I need to be. What else can you do?", next: "node_06_strong" },
        { id: "node_05_strong_B", text: "Hmm. I was thinking more like $500.", next: "node_06" },
        { id: "node_05_strong_C", text: "Six eighty. [pause and say nothing]", next: "node_06_strong" },
      ],
    },
    node_05: {
      id: "node_05",
      scene: "The salesperson considers your question professionally.",
      character: "Salesperson",
      text: "Our price is $800 and it reflects the quality. But I could speak to my manager about a small discount for today only.",
      hint: "For today only is time pressure. Also notice that the seller just told you there is another decision-maker in the store.",
      choices: [
        { id: "node_05_A", text: "I'm not in a rush. What would that small discount look like?", next: "node_06" },
        { id: "node_05_B", text: "Actually, is the manager available? I'd prefer to speak directly.", next: "node_manager_early" },
        { id: "node_05_C", text: "I understand the quality. I'm looking for the right value for both of us.", next: "node_06" },
        { id: "node_05_D", text: "This is ridiculous. You're obviously trying to rip me off.", next: "node_accusation" },
      ],
    },
    node_05_weak: {
      id: "node_05_weak",
      scene: "The salesperson senses your position has softened.",
      character: "Salesperson",
      text: "I can do $680 for you — that's already a great deal. This suit won't last long at this price.",
      hint: "Scarcity pressure is working on you. You can still recover, but only if you slow the conversation down.",
      choices: [
        { id: "node_05_weak_A", text: "I appreciate the offer. I'm not concerned about time pressure. What's your actual floor?", next: "node_06" },
        { id: "node_05_weak_B", text: "Okay, $680 works.", next: "END_B08" },
      ],
    },
    node_06_strong: {
      id: "node_06_strong",
      scene: "The salesperson shifts slightly. You can see them recalculating.",
      character: "Salesperson",
      text: "Look, I'll be honest with you. I can go to $560. That's twenty-thirty percent off — it's genuinely the best I can do without involving my store director.",
      hint: "Excellent. The seller just revealed both their limit and the next layer of authority. That opens the path to the strongest outcomes.",
      choices: [
        { id: "node_06_strong_A", text: "I appreciate your honesty. Let's bring in the director then.", next: "node_manager" },
        { id: "node_06_strong_B", text: "Five sixty is closer. What would make this work at $500?", next: "node_07_strong" },
        { id: "node_06_strong_C", text: "Five sixty plus free alterations. Then we have a deal.", next: "node_07_package" },
        { id: "node_06_strong_D", text: "That's still too high. I'm going to need a much better number or I'm walking.", next: "node_pressure" },
      ],
    },
    node_06: {
      id: "node_06",
      scene: "The salesperson checks something on a tablet.",
      character: "Salesperson",
      text: "I can authorise fifteen percent — bringing it to $680. That's the maximum I can do personally.",
      hint: "Personally is the key word. If this person is at their limit, your leverage comes from reaching someone with broader authority.",
      choices: [
        { id: "node_06_A", text: "Who else in the store has authority to approve a better price?", next: "node_manager" },
        { id: "node_06_B", text: "Six eighty plus free alterations and we're done.", next: "node_07_package" },
        { id: "node_06_C", text: "That doesn't work for me. I need to think about it.", next: "node_think" },
      ],
    },
    node_manager_early: {
      id: "node_manager_early",
      scene: "The salesperson looks mildly surprised, then nods.",
      character: "Salesperson",
      text: "Of course. Let me get Mr. Chen. One moment please.",
      hint: "Good escalation. Before the director arrives, reset your targets and your walk-away number in your head.",
      choices: [
        {
          id: "node_manager_early_A",
          text: "[While waiting, you review your position: target $480-500, walk away above $600.]",
          next: "node_manager",
        },
      ],
    },
    node_manager: {
      id: "node_manager",
      scene: "A confident man in his 50s approaches and offers a handshake.",
      character: "Director",
      text: "Good afternoon. I'm Michael Chen, store director. I understand you're interested in our Italian collection?",
      hint: "New decision-maker, new conversation. Start by understanding the director's reality instead of blurting out a number.",
      choices: [
        {
          id: "node_manager_A",
          text: "Yes. I've spoken with your colleague. The suit is excellent. I'm trying to understand what a fair deal looks like for both sides.",
          next: "node_manager_02",
        },
        { id: "node_manager_B", text: "Yes. I want this suit for $500. What can you do?", next: "node_manager_02b" },
        {
          id: "node_manager_C",
          text: "Hello Mr. Chen. I notice this collection has been here six weeks. Help me understand the situation.",
          next: "node_manager_02",
        },
      ],
    },
    node_manager_02: {
      id: "node_manager_02",
      scene: "The director studies you for a moment and smiles.",
      character: "Director",
      text: "I appreciate a man who thinks about fairness. Let me be frank — we have targets this month. I can offer you $540 with complimentary alterations. That's exceptional value.",
      hint: "The director just told you the real pressure: monthly targets. Use that insight respectfully and trade for a stronger package.",
      choices: [
        {
          id: "node_manager_02_A",
          text: "I understand the pressure of targets. Here's what would make this work for me today: $490 with alterations and a tie.",
          next: "node_final_strong",
        },
        { id: "node_manager_02_B", text: "Five forty with alterations is better. Could we add a tie to make it complete?", next: "node_final_mid" },
        { id: "node_manager_02_C", text: "Five forty works. Done.", next: "END_A03" },
        { id: "node_manager_02_D", text: "Three hundred. Take it or leave it.", next: "node_manager_fail" },
      ],
    },
    node_manager_02b: {
      id: "node_manager_02b",
      scene: "The director's smile becomes more guarded.",
      character: "Director",
      text: "Five hundred is not something I can authorise. I can offer $580. That's my final number.",
      hint: "Opening with a hard number narrowed your options. You can still salvage a solid deal if you calm the conversation back down.",
      choices: [
        { id: "node_manager_02b_A", text: "I hear you. Five eighty with free alterations and I'll sign now.", next: "END_A02" },
        { id: "node_manager_02b_B", text: "I understand. Let me ask — what would it take to get to $520?", next: "node_final_mid" },
        { id: "node_manager_02b_C", text: "That's completely unacceptable! I demand to speak to someone above you!", next: "node_director_outburst" },
      ],
    },
    node_07_strong: {
      id: "node_07_strong",
      scene: "The salesperson looks uncertain.",
      character: "Salesperson",
      text: "Five hundred... I genuinely cannot do that myself. I would need to involve our director, Mr. Chen.",
      hint: "That is not a dead end. It is permission to escalate to the person who can unlock the deal.",
      choices: [
        { id: "node_07_strong_A", text: "Please do. I'd welcome that conversation.", next: "node_manager" },
        { id: "node_07_strong_B", text: "What if we structure it differently — $560 with alterations included and a tie?", next: "node_07_package" },
      ],
    },
    node_07_package: {
      id: "node_07_package",
      scene: "The salesperson weighs the package you proposed.",
      character: "Salesperson",
      text: "The alterations I can include. A tie... I'd need to speak with Mr. Chen about that. One moment.",
      hint: "You are negotiating the full package now, not just the sticker. That is often where value expands fastest.",
      choices: [
        { id: "node_07_package_A", text: "[You wait calmly, check your phone, and show no urgency.]", next: "node_final_mid" },
      ],
    },
    node_final_strong: {
      id: "node_final_strong",
      scene: "The director and salesperson exchange a brief look.",
      character: "Director",
      text: "Four ninety with alterations... I can do that. And I'll add one of our house ties — we have a fine selection.",
      hint: "You are one measured push away from the best possible ending. Be precise, not greedy.",
      choices: [
        { id: "node_final_strong_A", text: "Mr. Chen, if you can do $480 with the tie and alterations, I'll sign right now.", next: "END_E01" },
        { id: "node_final_strong_B", text: "Deal. Four ninety with alterations and the tie.", next: "END_G03" },
      ],
    },
    node_final_mid: {
      id: "node_final_mid",
      scene: "The director settles on a cleaner final package.",
      character: "Director",
      text: "Here's where I land: $520 with complimentary alterations. I can add a pocket square as well.",
      hint: "This is already a strong result. You can accept it or make one final, focused trade.",
      choices: [
        { id: "node_final_mid_A", text: "Five twenty with alterations and a tie — not a pocket square — and done.", next: "END_G01" },
        { id: "node_final_mid_B", text: "Could we say $500 with the alterations and I'll take the pocket square?", next: "END_G02" },
        { id: "node_final_mid_C", text: "Five twenty with alterations. Agreed.", next: "END_A01" },
      ],
    },
    node_think: {
      id: "node_think",
      scene: "You say you need to think, leave the store, and return an hour later.",
      character: "Salesperson",
      text: "Welcome back! I'm afraid the seasonal discount I offered earlier has expired. The suit is $740 today.",
      hint: "Walking away without a next-step agreement usually weakens your position instead of strengthening it.",
      choices: [
        { id: "node_think_A", text: "That's not acceptable. I'd like to speak with your director.", next: "END_B09" },
        { id: "node_think_B", text: "Fine. Seven forty.", next: "END_B09" },
      ],
    },
    node_substitute: {
      id: "node_substitute",
      scene: "The salesperson smoothly guides you toward another rack.",
      character: "Salesperson",
      text: "Actually, between us — that Italian suit is overpriced for what it is. Let me show you something far better value. This one is $620, excellent quality.",
      hint: "Classic redirect. If you let the seller change the product, they change the game.",
      choices: [
        { id: "node_substitute_A", text: "I appreciate it, but I came here for the Italian suit specifically. Let's focus on that.", next: "node_05" },
        { id: "node_substitute_B", text: "Oh, interesting. Tell me more about this one.", next: "END_B04" },
      ],
    },
    node_distract2: {
      id: "node_distract2",
      scene: "The music suddenly gets louder. A staff member walks past with several bright jackets.",
      character: "Salesperson",
      text: "Oh, our new spring collection just arrived! Aren't those colours fantastic? But of course, you're a man of classic taste...",
      hint: "Noise, novelty, and flattery are all distractions. Hold your focus on the deal you actually came for.",
      choices: [
        { id: "node_distract2_A", text: "I'm focused on the suit we were discussing. Shall we continue?", next: "node_05" },
        { id: "node_distract2_B", text: "Oh those are nice! Let me just take a quick look...", next: "END_B05" },
      ],
    },
    node_manager_fail: {
      id: "node_manager_fail",
      scene: "You demand an unrealistically low number from the director.",
      character: "Director",
      text: "I'm sorry, but three hundred dollars for an $800 suit is simply not something I can consider. That would be below our cost. I'm afraid I can't help you at that price.",
      hint: "Extreme numbers are not always bold. Sometimes they just destroy credibility.",
      choices: [
        { id: "node_manager_fail_A", text: "You're right, I was out of line. What's the realistic floor we can work with?", next: "node_manager_02" },
        { id: "node_manager_fail_B", text: "This is outrageous. I'll just buy it full price elsewhere.", next: "END_B06" },
      ],
    },
    node_pressure: {
      id: "node_pressure",
      scene: "You push too hard with repeated demands. The salesperson closes off.",
      character: "Salesperson",
      text: "Sir, I've told you everything I can offer. I have other customers to attend to. The price is $800.",
      hint: "Pressure without a clear win for the other side creates resistance, not cooperation.",
      choices: [
        { id: "node_pressure_A", text: "I understand. I apologise for the pressure. Could we start fresh?", next: "node_05" },
        { id: "node_pressure_B", text: "Fine. I'll look elsewhere.", next: "END_B07" },
      ],
    },
    node_accusation: {
      id: "node_accusation",
      scene: "You lose composure and accuse the salesperson personally.",
      character: "Salesperson",
      text: "I beg your pardon? I have not lied to you about anything. This is extremely inappropriate.",
      hint: "Attacking the person is one of the fastest ways to kill a negotiation.",
      choices: [
        { id: "node_accusation_A", text: "I apologise completely. That was out of line. I'm sorry.", next: "END_B03" },
        { id: "node_accusation_B", text: "I know what I'm talking about. You're manipulating me!", next: "END_T02" },
      ],
    },
    node_director_outburst: {
      id: "node_director_outburst",
      scene: "Frustrated with the director, you raise your voice.",
      character: "Director",
      text: "Sir, I need to ask you to lower your voice. There are other customers in the store.",
      hint: "Public loss of self-control almost never produces leverage. It usually ends the conversation instead.",
      choices: [
        { id: "node_director_outburst_A", text: "You're right. I apologise. Can we continue professionally?", next: "END_B06" },
        { id: "node_director_outburst_B", text: "I'll speak however I want! This is ridiculous!", next: "END_T03" },
      ],
    },
    END_E01: {
      id: "END_E01",
      scene: "Mr. Chen extends his hand with a genuine smile.",
      character: "Director",
      text: "Four eighty it is. Well negotiated. I'll have the tailor take measurements and we'll select a tie together.",
      type: "ending",
      endingCode: "E01",
    },
    END_G01: {
      id: "END_G01",
      scene: "The director shakes your hand.",
      text: "Five twenty with alterations and a tie. You drive a hard bargain.",
      type: "ending",
      endingCode: "G01",
    },
    END_G02: {
      id: "END_G02",
      scene: "The director nods.",
      text: "Five hundred even. With the pocket square. Pleasure doing business.",
      type: "ending",
      endingCode: "G02",
    },
    END_G03: {
      id: "END_G03",
      scene: "You shake hands with the director.",
      text: "Four ninety. Alterations included. Tie included. We have a deal.",
      type: "ending",
      endingCode: "G03",
    },
    END_A01: {
      id: "END_A01",
      text: "Five twenty with alterations. Agreed.",
      type: "ending",
      endingCode: "A01",
    },
    END_A02: {
      id: "END_A02",
      text: "Five eighty with alterations. Agreed.",
      type: "ending",
      endingCode: "A02",
    },
    END_A03: {
      id: "END_A03",
      text: "Five forty. Good doing business with you.",
      type: "ending",
      endingCode: "A03",
    },
    END_B01: {
      id: "END_B01",
      text: "Eight hundred. Thank you for your purchase.",
      type: "ending",
      endingCode: "B01",
    },
    END_B02: {
      id: "END_B02",
      text: "Seven twenty. Welcome to our loyalty program!",
      type: "ending",
      endingCode: "B02",
    },
    END_B08: {
      id: "END_B08",
      text: "Six eighty. Excellent choice.",
      type: "ending",
      endingCode: "B08",
    },
    END_B09: {
      id: "END_B09",
      text: "Seven forty. We appreciate your return.",
      type: "ending",
      endingCode: "B09",
    },
    END_B03: {
      id: "END_B03",
      text: "The salesperson turns away. You leave empty-handed.",
      type: "ending",
      endingCode: "B03",
    },
    END_B04: {
      id: "END_B04",
      text: "You buy the substitute suit for $620. Walking home, you realise it is not what you came for.",
      type: "ending",
      endingCode: "B04",
    },
    END_B05: {
      id: "END_B05",
      text: "Half an hour later you leave with a spring jacket you did not need for $450.",
      type: "ending",
      endingCode: "B05",
    },
    END_B06: {
      id: "END_B06",
      text: "Both salesperson and director stand firm. You pay $800.",
      type: "ending",
      endingCode: "B06",
    },
    END_B07: {
      id: "END_B07",
      text: "The salesperson finds reasons to be unavailable. You wait, then leave.",
      type: "ending",
      endingCode: "B07",
    },
    END_T02: {
      id: "END_T02",
      text: "A security guard appears. You are escorted out of the store.",
      type: "ending",
      endingCode: "T02",
    },
    END_T03: {
      id: "END_T03",
      text: "Other customers stare. The director calls security. You leave in shame.",
      type: "ending",
      endingCode: "T03",
    },
    END_T04: {
      id: "END_T04",
      text: "Security escorts you out. The store manager films the incident.",
      type: "ending",
      endingCode: "T04",
    },
    END_T05: {
      id: "END_T05",
      text: "You leave confused, embarrassed, and empty-handed. You are not sure what just happened.",
      type: "ending",
      endingCode: "T05",
    },
  },
  endings: {
    E01: {
      code: "E01",
      type: "ideal",
      title: "Ideal Outcome",
      shortLabel: "Ideal",
      outcome: "Suit for $480, free alterations, and a complimentary tie.",
      explanation:
        "You stayed calm, uncovered the store's pressure, escalated at the right moment, and negotiated both price and extras without sounding desperate.",
      lessons: [
        "Lead with questions, not neediness.",
        "Use the seller's pressure points respectfully.",
        "Trade for the whole package, not just the sticker price.",
      ],
      points: 10,
    },
    G01: {
      code: "G01",
      type: "good",
      title: "Good Outcome",
      shortLabel: "Good",
      outcome: "Suit for $520 with free alterations and a tie.",
      explanation:
        "You reached a strong package by escalating well and closing cleanly, even though there was still a little room left at the very end.",
      lessons: [
        "Escalation works when you do it calmly.",
        "Packaging value can outperform a simple discount.",
      ],
      points: 9,
    },
    G02: {
      code: "G02",
      type: "good",
      title: "Good Outcome",
      shortLabel: "Good",
      outcome: "Suit for $500 with alterations and an added accessory.",
      explanation:
        "You turned the conversation into a practical trade and landed a very solid deal close to the best zone.",
      lessons: [
        "A final focused push can still improve a good offer.",
        "Negotiate concrete value, not vague goodwill.",
      ],
      points: 9,
    },
    G03: {
      code: "G03",
      type: "good",
      title: "Good Outcome",
      shortLabel: "Good",
      outcome: "Suit for $490 with alterations and a tie.",
      explanation:
        "You escalated effectively and closed a premium result. One more small move would have produced the ideal ending.",
      lessons: [
        "Bring in authority when the front-line seller reaches a ceiling.",
        "Close decisively once the deal is strong enough.",
      ],
      points: 9,
    },
    A01: {
      code: "A01",
      type: "acceptable",
      title: "Acceptable Outcome",
      shortLabel: "Acceptable",
      outcome: "Suit for $520 with free alterations.",
      explanation:
        "This is a respectable deal, but you settled before extracting the strongest accessory or final price improvement.",
      lessons: [
        "Good offers are not always final offers.",
        "One last well-framed trade can improve the package.",
      ],
      points: 7,
    },
    A02: {
      code: "A02",
      type: "acceptable",
      title: "Acceptable Outcome",
      shortLabel: "Acceptable",
      outcome: "Suit for $580 with free alterations.",
      explanation:
        "You recovered enough to get some value, but the early framing made the director keep tighter control of the outcome.",
      lessons: [
        "A rushed opening can narrow your later options.",
        "Recovery is possible, but strong framing matters from the start.",
      ],
      points: 7,
    },
    A03: {
      code: "A03",
      type: "acceptable",
      title: "Acceptable Outcome",
      shortLabel: "Acceptable",
      outcome: "Suit for $540 with no extra bonus beyond alterations.",
      explanation:
        "You found the director's pressure and got a fair discount, but you closed a little early instead of pressing for the full package.",
      lessons: [
        "Do not stop at the first credible director offer.",
        "Use new information to ask for a cleaner final package.",
      ],
      points: 7,
    },
    B01: {
      code: "B01",
      type: "bad",
      title: "Bad Outcome",
      shortLabel: "Bad",
      outcome: "You paid the full $800.",
      explanation:
        "You signaled too much desire and let the salesperson move you directly from emotion to payment.",
      lessons: [
        "Neediness destroys leverage.",
        "Never let checkout happen before negotiation.",
      ],
      points: 5,
    },
    B02: {
      code: "B02",
      type: "bad",
      title: "Bad Outcome",
      shortLabel: "Bad",
      outcome: "You accepted $720 through the loyalty-program distraction.",
      explanation:
        "A small discount sounded official enough to feel good, but it was far from the store's real flexibility.",
      lessons: [
        "Do not confuse paperwork with leverage.",
        "A branded discount is not always a strong discount.",
      ],
      points: 5,
    },
    B03: {
      code: "B03",
      type: "bad",
      title: "Bad Outcome",
      shortLabel: "Bad",
      outcome: "You left empty-handed after damaging the relationship.",
      explanation:
        "Once the conversation became personal, the seller stopped being a potential ally and the deal collapsed.",
      lessons: [
        "Attack the problem, not the person.",
        "Relationship damage is expensive in negotiation.",
      ],
      points: 5,
    },
    B04: {
      code: "B04",
      type: "bad",
      title: "Bad Outcome",
      shortLabel: "Bad",
      outcome: "You bought the wrong suit for $620.",
      explanation:
        "The seller shifted your attention from your mission to a different product, and you followed their frame.",
      lessons: [
        "Stay anchored to the real objective.",
        "Product switching is a negotiation tactic, not a favor.",
      ],
      points: 5,
    },
    B05: {
      code: "B05",
      type: "bad",
      title: "Bad Outcome",
      shortLabel: "Bad",
      outcome: "You got distracted and walked out with something you did not plan to buy.",
      explanation:
        "Noise, novelty, and flattery pulled you away from the deal you were actually trying to make.",
      lessons: [
        "Protect your focus.",
        "Distraction is often a tactic, not an accident.",
      ],
      points: 5,
    },
    B06: {
      code: "B06",
      type: "bad",
      title: "Bad Outcome",
      shortLabel: "Bad",
      outcome: "Even after escalation, you still paid $800.",
      explanation:
        "You reached the director without enough credibility or control, so the higher authority did not help you.",
      lessons: [
        "Escalation only works when your framing is solid.",
        "Higher authority is not a shortcut for poor positioning.",
      ],
      points: 5,
    },
    B07: {
      code: "B07",
      type: "bad",
      title: "Bad Outcome",
      shortLabel: "Bad",
      outcome: "You pushed so hard that the seller disengaged.",
      explanation:
        "Pressure without a mutually workable path created resistance instead of movement.",
      lessons: [
        "Force creates pushback.",
        "Pair firmness with a believable path to agreement.",
      ],
      points: 5,
    },
    B08: {
      code: "B08",
      type: "bad",
      title: "Bad Outcome",
      shortLabel: "Bad",
      outcome: "You accepted $680 and thought it was enough.",
      explanation:
        "That discount felt like progress, but you settled well above the zone where the strongest outcomes were available.",
      lessons: [
        "Early discounts are rarely the finish line.",
        "Do not confuse movement with maximum value.",
      ],
      points: 5,
    },
    B09: {
      code: "B09",
      type: "bad",
      title: "Bad Outcome",
      shortLabel: "Bad",
      outcome: "You left to think and came back to a worse price.",
      explanation:
        "Without an agreed next step, walking away weakened your position and let the store reset the terms.",
      lessons: [
        "Do not leave a live negotiation without structure.",
        "Lock in the next step before stepping away.",
      ],
      points: 5,
    },
    T02: {
      code: "T02",
      type: "terrible",
      title: "Terrible Outcome",
      shortLabel: "Terrible",
      outcome: "Security escorted you out after a personal accusation.",
      explanation:
        "Once you escalated into personal attacks, the negotiation stopped being about the deal and became a conflict.",
      lessons: [
        "Personal accusations end conversations fast.",
        "Self-control is non-negotiable.",
      ],
      points: 1,
    },
    T03: {
      code: "T03",
      type: "terrible",
      title: "Terrible Outcome",
      shortLabel: "Terrible",
      outcome: "A public confrontation with the director ended the negotiation.",
      explanation:
        "Losing composure in front of other customers destroyed your credibility and any chance of cooperation.",
      lessons: [
        "Public emotion reduces leverage.",
        "Protect your composure, especially after escalation.",
      ],
      points: 1,
    },
    T04: {
      code: "T04",
      type: "terrible",
      title: "Terrible Outcome",
      shortLabel: "Terrible",
      outcome: "Security removed you from the store.",
      explanation:
        "Physical aggression ended the discussion immediately. At that point there was no negotiation left to save.",
      lessons: [
        "Never let frustration become physical.",
        "A lost temper is a lost deal.",
      ],
      points: 1,
    },
    T05: {
      code: "T05",
      type: "terrible",
      title: "Terrible Outcome",
      shortLabel: "Terrible",
      outcome: "You left confused, empty-handed, and without a coherent plan.",
      explanation:
        "Without a stable objective or structure, the conversation drifted until the negotiation effectively collapsed on its own.",
      lessons: [
        "Enter with a mission and a walk-away point.",
        "Negotiation without structure usually unravels.",
      ],
      points: 1,
    },
  },
};

export const negotiationQuests = [perfectSuitQuest];
