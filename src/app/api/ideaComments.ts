import { supabase } from '../../../supabase/supabaseConfig';

import type { TChallengeIdeaComment } from '@/components/ideaDetailPage/Review';

export const postChallengeIdeaComment = async (commentData: TChallengeIdeaComment) => {
  const response = await supabase.from('ideaComments').insert(commentData);
  console.error(response.error);
  return response.data;
};
