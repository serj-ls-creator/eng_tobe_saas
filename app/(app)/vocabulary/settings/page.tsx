"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Check, 
  Settings as SettingsIcon, 
  Sliders, 
  Sparkles,
  Volume2
} from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { usePoints } from "@/lib/usePoints";
import { 
  getStoredVocabularySettings, 
  saveStoredVocabularySettings, 
  VocabularyCardDisplaySettings 
} from "@/lib/vocabulary";

interface DisplayFieldOption {
  key: keyof VocabularyCardDisplaySettings;
  label: string;
  description: string;
}

const DISPLAY_OPTIONS: DisplayFieldOption[] = [
  {
    key: "showIpa",
    label: "Pronunciation (IPA)",
    description: "Show phonetic transcription next to the word",
  },
  {
    key: "showDefinition",
    label: "English Definition",
    description: "Display explanation in simple English",
  },
  {
    key: "showTranslation",
    label: "Translation",
    description: "Show word translation in your language",
  },
  {
    key: "showSynonyms",
    label: "Synonyms",
    description: "Display similar words and alternative phrases",
  },
  {
    key: "showNotes",
    label: "Personal Notes",
    description: "Show personal examples, context, or memory tricks",
  },
];

export default function VocabularySettingsPage() {
  const points = usePoints();
  const router = useRouter();

  const [settings, setSettings] = useState<VocabularyCardDisplaySettings>(getStoredVocabularySettings());
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setSettings(getStoredVocabularySettings());
  }, []);

  const toggleField = (key: keyof VocabularyCardDisplaySettings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    saveStoredVocabularySettings(settings);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      router.push("/vocabulary/list");
    }, 700);
  };

  // Sample data for live preview (all English)
  const sample = {
    word: "resilience",
    ipa: "/ rɪˈzɪliəns /",
    definition: "The capacity to recover quickly from difficulties; toughness.",
    translation: "Endurance, stamina",
    synonyms: "grit, persistence, tenacity",
    notes: "Remember: Keep going despite any obstacle!",
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />

      <div className="content-shell pb-16">
        {/* Back Link */}
        <div className="mb-3">
          <Link
            href="/vocabulary/list"
            className="inline-flex items-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to My Dictionary
          </Link>
        </div>

        {/* Header */}
        <div className="mb-4">
          <h1 className="text-2xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Card Display Settings
            </span>
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Choose what details appear on your word cards in the dictionary list.
          </p>
          <div className="mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
        </div>

        {/* Single Column Display Toggles */}
        <Card className="mb-4 border-white/10 bg-zinc-900/90 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Visible Card Fields
            </span>
          </div>

          <div className="space-y-3">
            {DISPLAY_OPTIONS.map((opt) => {
              const isChecked = settings[opt.key];
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => toggleField(opt.key)}
                  className="w-full flex items-start gap-3 rounded-xl border border-white/5 bg-zinc-800/60 p-3 text-left transition-colors hover:bg-zinc-800"
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                      isChecked
                        ? "bg-cyan-400 border-cyan-400 text-black shadow-sm"
                        : "border-white/20 bg-zinc-900 text-transparent"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs font-bold ${isChecked ? "text-white" : "text-zinc-400"}`}>
                      {opt.label}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">
                      {opt.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Live Card Preview */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2 px-1">
            <span className="h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
              Live Card Preview
            </span>
          </div>

          <Card className="relative overflow-hidden border-white/10 bg-zinc-900/90 p-4 shadow-xl">
            {/* Left Status Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400" />

            <div className="pl-1">
              {/* Word, IPA & Audio preview */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <span className="text-base font-extrabold text-white">
                    {sample.word}
                  </span>
                  {settings.showIpa && (
                    <span className="text-xs text-zinc-400 font-mono">
                      {sample.ipa}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-500/10 text-yellow-400">
                  <Volume2 className="h-4 w-4" />
                </div>
              </div>

              {/* Definition */}
              {settings.showDefinition && (
                <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                  {sample.definition}
                </p>
              )}

              {/* Translation */}
              {settings.showTranslation && (
                <p className="text-xs font-medium text-pink-300 mt-1">
                  {sample.translation}
                </p>
              )}

              {/* Synonyms */}
              {settings.showSynonyms && (
                <div className="text-[11px] text-zinc-400 mt-1">
                  <span className="text-zinc-500 font-medium">Synonyms: </span>
                  {sample.synonyms}
                </div>
              )}

              {/* Notes */}
              {settings.showNotes && (
                <div className="mt-2 rounded-lg bg-zinc-800/60 p-2 text-[11px] text-zinc-300 italic border border-white/5">
                  💡 {sample.notes}
                </div>
              )}

              {/* Bottom pill preview */}
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 ring-1 ring-emerald-400/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  Learned
                </span>
                <span className="text-[10px] text-zinc-500 font-medium">Preview</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 py-3.5 text-sm font-extrabold text-black shadow-lg shadow-purple-500/20 transition-transform active:scale-[0.98]"
        >
          {savedSuccess ? "✓ Settings Saved!" : "Save Settings"}
        </button>
      </div>
    </div>
  );
}
