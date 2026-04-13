"use client";

import { useState, useEffect } from "react";
import { User, LogOut, Trophy, Flame, Star } from "lucide-react";

import { Card } from "@/components/ui/card";
import { createBrowserClient } from "@supabase/ssr";

interface ProfileSectionProps {
  profile: {
    id: string;
    user_id: string;
    is_premium: boolean;
    streak: number;
    created_at: string;
    display_name?: string;
    avatar?: string;
    email?: string;
  };
}

const avatarOptions = [
  "🐶", "🐱", "🦊", "🐙", "🦄", "🐯", "🦋", "🐰",
  "🦁", "🐯", "🦊", "🐸", "🦝", "🦘", "🐼", "🦩",
  "🤠", "🤡", "🤢", "🤣", "🤤", "🤥", "🤦", "🧠",
  "👑", "🎭", "🎪", "🎨", "🎬", "🎤", "🎧", "🎸", "🎹",
  "👨", "👩", "🧑", "👦", "👧",
  "🤴", "🥳", "🤵", "🤶", "🥷", "🤸", "🤹", "🤺", "🥻"
];

export function ProfileSection({ profile }: ProfileSectionProps) {
  const [selectedAvatar, setSelectedAvatar] = useState(profile.avatar || "👤");
  const [userName, setUserName] = useState(profile.display_name || "Player");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  const handleSignOut = async () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const saveProfile = async () => {
    setIsSaving(true);
    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      
      const { error } = await supabase
        .from("profiles")
        .update({
          display_name: userName,
          avatar: selectedAvatar
        })
        .eq("user_id", profile.user_id);

      if (error) {
        console.error("Error updating profile:", error);
      } else {
        console.log("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="content-shell pb-4">
      <div className="mx-auto max-w-shell">
        <div className="fade-up">
          {/* Profile Header */}
          <Card className="mb-6 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <button
                  onClick={() => setShowAvatarModal(true)}
                  className="text-4xl hover:scale-110 transition-transform cursor-pointer"
                >
                  {selectedAvatar}
                </button>
              </div>
              <div className="flex-1">
                {isEditingName ? (
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    onBlur={() => setIsEditingName(false)}
                    onKeyDown={(e) => e.key === "Enter" && setIsEditingName(false)}
                    className="text-xl font-bold bg-transparent border-b border-cyan-400 outline-none text-white"
                    autoFocus
                  />
                ) : (
                  <h1 
                    className="text-xl font-bold text-white cursor-pointer hover:text-cyan-400 transition-colors"
                    onClick={() => setIsEditingName(true)}
                  >
                    {userName}
                  </h1>
                )}
                <p className="text-sm text-zinc-500">Level 12 Learner</p>
                <p className="text-xs text-zinc-400 truncate">{profile.email || profile.user_id}</p>
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={saveProfile}
              disabled={isSaving}
              className="w-full mb-4 flex items-center justify-center gap-2 p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  <span className="font-medium">Saving...</span>
                </>
              ) : (
                <>
                  <span className="font-medium">Save Profile</span>
                </>
              )}
            </button>

                      </Card>

          {/* Stats Section */}
          <Card className="mb-6 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Your Progress</h2>
            
            <div className="space-y-4">
              {/* Progress by Sections */}
              <div>
                <h3 className="text-sm font-medium text-white mb-3">Sections Progress</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">Words</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-cyan-400"></div>
                      </div>
                      <span className="text-xs text-zinc-500">75%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">Sentences</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-cyan-400"></div>
                      </div>
                      <span className="text-xs text-zinc-500">50%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">Idioms</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-cyan-400"></div>
                      </div>
                      <span className="text-xs text-zinc-500">33%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">Synonyms</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-1/4 h-full bg-cyan-400"></div>
                      </div>
                      <span className="text-xs text-zinc-500">25%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-xl bg-orange-400/20">
                    <Flame className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="text-lg font-bold text-white">{profile.streak || 0}</div>
                  <div className="text-xs text-zinc-500">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-xl bg-yellow-400/20">
                    <Trophy className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="text-lg font-bold text-white">1,240</div>
                  <div className="text-xs text-zinc-500">Points</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-xl bg-purple-400/20">
                    <Star className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="text-lg font-bold text-white">15</div>
                  <div className="text-xs text-zinc-500">Achievements</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Logout Button */}
          <button 
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Avatar Selection Modal */}
      {showAvatarModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#050505] rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Choose Avatar</h3>
              <button
                onClick={() => setShowAvatarModal(false)}
                className="text-zinc-400 hover:text-zinc-300 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-6 gap-3 justify-items-center">
              {avatarOptions.map((avatar) => (
                <button
                  key={avatar}
                  onClick={() => {
                    setSelectedAvatar(avatar);
                    setShowAvatarModal(false);
                  }}
                  className={`p-4 text-2xl rounded-lg transition-all flex items-center justify-center hover:scale-110 ${
                    selectedAvatar === avatar 
                      ? "bg-cyan-400/20 border border-cyan-400" 
                      : "bg-white/[0.02] border border-white/10 hover:bg-white/[0.05]"
                  }`}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
