// src/shared/ui/tiptap-editor.tsx
'use client';

import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Placeholder from '@tiptap/extension-placeholder';
import { Bold, Italic, Heading1, Heading2, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

// ✅ 인터페이스 정의
export interface TiptapEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

const EditorToolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  return (
    <div className="flex items-center gap-1 p-2 border-b border-[var(--color-border)] bg-[var(--color-bg-gray-light)]">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive('heading', { level: 1 })}
        icon={<Heading1 className="h-5 w-5" />}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive('heading', { level: 2 })}
        icon={<Heading2 className="h-5 w-5" />}
      />
      <div className="w-px h-5 bg-[var(--color-border)] mx-2" />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
        icon={<Bold className="h-5 w-5" />}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
        icon={<Italic className="h-5 w-5" />}
      />
      <div className="w-px h-5 bg-[var(--color-border)] mx-2" />
      <div className="relative flex items-center justify-center">
        <input
          type="color"
          onInput={(event) => {
            editor
              .chain()
              .focus()
              .setColor((event.target as HTMLInputElement).value)
              .run();
          }}
          value={editor.getAttributes('textStyle').color || '#000000'}
          className="absolute inset-0 opacity-0 w-8 h-8 cursor-pointer z-10"
        />
        <Button
          variant="ghost"
          size="icon-sm"
          className="relative hover:bg-white"
        >
          <Palette
            className="h-5 w-5"
            style={{ color: editor.getAttributes('textStyle').color }}
          />
        </Button>
      </div>
    </div>
  );
};

const ToolbarButton = ({
  onClick,
  isActive,
  icon,
}: {
  onClick: () => void;
  isActive: boolean;
  icon: React.ReactNode;
}) => (
  <Button
    variant="ghost"
    size="icon-sm"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={cn(
      'text-gray-500 hover:bg-white hover:text-black transition-colors',
      isActive && 'bg-white text-black font-bold shadow-sm',
    )}
  >
    {icon}
  </Button>
);

export const TiptapEditor = ({
  content,
  onChange,
  placeholder,
}: TiptapEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      Placeholder.configure({
        placeholder: placeholder || '내용을 입력해주세요...',
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        // ✅ p-10으로 여백을 더 넉넉하게 주어 박스와의 간격 확보
        class:
          'prose prose-lg max-w-none focus:outline-none min-h-[50vh] text-[var(--color-foreground)] p-10',
      },
    },
    immediatelyRender: false,
  });

  return (
    <div className="w-full border border-[var(--color-border)] rounded-lg overflow-hidden bg-white focus-within:ring-1 focus-within:ring-[var(--color-main)] transition-all">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
