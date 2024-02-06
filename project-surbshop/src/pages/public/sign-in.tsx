import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  SINGIN_SUB_TITLE,
  SINGIN_TITLE,
} from '@/utils/constants/phrases-constant'
import {
  ERROR_CREDENTIALS,
  SUCCESS_SEND_LINK_EMAIL,
} from '@/utils/constants/valid-message-constant'

const SingInForm = z.object({
  email: z.string().email(),
})

type SINGIN_TYPE = z.infer<typeof SingInForm>

export function SingIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SINGIN_TYPE>()

  async function handleSingIn(data: SINGIN_TYPE) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log(data)
      toast.success(SUCCESS_SEND_LINK_EMAIL, {
        position: 'top-right',
      })
    } catch (error) {
      toast.error(ERROR_CREDENTIALS, {
        position: 'top-right',
        action: {
          label: 'Reenviar',
          onClick: () => console.log(''),
        },
      })
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute top-8 right-8 ">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {SINGIN_TITLE}
            </h1>
            <p className="text-sm text-muted-foreground">{SINGIN_SUB_TITLE}</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSingIn)}>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button disabled={isSubmitting} className="w-full">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
