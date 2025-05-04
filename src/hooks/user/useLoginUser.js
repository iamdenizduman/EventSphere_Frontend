import { useMutation } from '@tanstack/react-query';
import { loginUserService } from '../../services/user/loginUserService';

export const useLoginUser = () => {
  return useMutation({
    mutationFn: loginUserService,
  });
};
