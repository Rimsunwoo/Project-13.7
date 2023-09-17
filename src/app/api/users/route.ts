import { NextResponse } from 'next/server';

import { supabase } from '../../../../supabase/supabaseConfig';
export const revalidate = 86400

export async function GET(): Promise<any> {
  const { data } = await supabase.from('users').select(`*`).range(0, 4).order('rank', { ascending: false });
  if (!data) {
    const noRes = new Response('res', { status: 500 });
    return noRes;
  }
  else {
    return NextResponse.json({ res: data });
  }
}
