type SupabaseClient = {
  auth: {
    getSession: () => Promise<unknown>;
    signInWithPassword: (credentials: { email: string; password: string }) => Promise<unknown>;
    signOut: () => Promise<unknown>;
  };
  from: (table: string) => unknown;
};

declare global {
  interface Window {
    supabase?: {
      createClient: (
        url: string,
        key: string,
        options?: Record<string, unknown>,
      ) => SupabaseClient;
    };
  }
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

export const supabase: SupabaseClient | null = (() => {
  if (!isSupabaseConfigured) return null;
  if (!window.supabase?.createClient) {
    console.error("Le SDK Supabase n'a pas été chargé.");
    return null;
  }

  return window.supabase.createClient(supabaseUrl!, supabaseKey!, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
})();
