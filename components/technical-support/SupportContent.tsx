'use client';

import Link from 'next/link';
import { AlertCircle, CheckCircle, ArrowLeft, Mail } from 'lucide-react';

import { Card } from '@/components/ui/card';

interface Section {
  title: string;
  content: string[];
}

interface Props {
  title: string;
  description: string;
  sections: Section[];
}

export function SupportContent({ title, description, sections }: Props) {
  return (
    <div className="content-shell">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-6">
            <Link 
              href="/technical-support" 
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Technical Support
            </Link>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
          <p className="text-zinc-400">{description}</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index} className="p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                {section.title.includes('Solution') || section.title.includes('Help') ? (
                  <CheckCircle className="h-5 w-5 text-green-400" />
                ) : section.title.includes('Issue') || section.title.includes('Problem') ? (
                  <AlertCircle className="h-5 w-5 text-yellow-400" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-cyan-400" />
                )}
                {section.title}
              </h2>
              
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-8 text-center">
          <Card className="p-6 bg-cyan-500/5 border-cyan-500/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Need More Help?</h3>
            </div>
            <p className="text-zinc-400 mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition-colors">
                <Mail className="h-4 w-4" />
                Contact Support
              </button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
