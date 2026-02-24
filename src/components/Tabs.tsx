import React, { createContext, useContext, useState } from 'react';

interface TabsContextValue {
  activeKey: string;
  setActiveKey: (key: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs components must be used within Tabs');
  return ctx;
}

interface TabsProps {
  defaultActiveKey: string;
  activeKey?: string;
  onSelect?: (key: string) => void;
  id?: string;
  children: React.ReactNode;
}

export function Tabs({
  defaultActiveKey,
  activeKey: controlledActiveKey,
  onSelect,
  id,
  children,
}: TabsProps): React.ReactElement {
  const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey);
  const isControlled = controlledActiveKey !== undefined;
  const activeKey = isControlled ? controlledActiveKey : internalActiveKey;
  const setActiveKey = (key: string) => {
    if (!isControlled) setInternalActiveKey(key);
    onSelect?.(key);
  };

  return (
    <TabsContext.Provider value={{ activeKey, setActiveKey }}>
      <div id={id}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabListProps {
  horizontal?: boolean;
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

export function TabList({
  horizontal = false,
  children,
  className = '',
  'aria-label': ariaLabel = 'Tabs',
}: TabListProps): React.ReactElement {
  return (
    <div
      className={`flex gap-2 pb-4 md:pb-0 text-center ${
        horizontal ? 'flex-row justify-center flex-wrap' : 'flex-col'
      } ${className}`}
      role="tablist"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

interface TabProps {
  eventKey: string;
  children: React.ReactNode;
  className?: string;
}

function eventKeyToId(eventKey: string): string {
  return eventKey.replace(/^#/, '').replace(/\//g, '-');
}

export function Tab({ eventKey, children, className = '' }: TabProps): React.ReactElement {
  const { activeKey, setActiveKey } = useTabs();
  const isActive = activeKey === eventKey;
  const panelId = `tabpanel-${eventKeyToId(eventKey)}`;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      id={`tab-${eventKeyToId(eventKey)}`}
      onClick={() => setActiveKey(eventKey)}
      className={`group relative px-4 py-2 rounded border-2 transition-all duration-150 ${
        isActive
          ? 'bg-black border-white'
          : 'bg-surface border-surface'
      } group-hover:border-transparent group-hover:[background:linear-gradient(black,black)_padding-box,linear-gradient(120deg,#67e8f9_0%,#22d3ee_15%,#0ea5e9_30%,#3b82f6_50%,#6366f1_70%,#8b5cf6_85%,#a78bfa_100%)_border-box] ${className}`}
    >
      <span className="text-white">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center bg-gradient-text bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded"
      >
        {children}
      </span>
    </button>
  );
}

interface TabPanelProps {
  eventKey: string;
  children: React.ReactNode;
}

export function TabPanel({ eventKey, children }: TabPanelProps): React.ReactElement | null {
  const { activeKey } = useTabs();
  if (activeKey !== eventKey) return null;
  const panelId = `tabpanel-${eventKeyToId(eventKey)}`;
  const tabId = `tab-${eventKeyToId(eventKey)}`;
  return (
    <div role="tabpanel" id={panelId} aria-labelledby={tabId} className="py-2">
      {children}
    </div>
  );
}
