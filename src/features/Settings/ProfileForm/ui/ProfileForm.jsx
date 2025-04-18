import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  Input,
  Textarea,
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  DatePickerSimple,
} from '@/shared/ui'
import { useUpdateProfile } from '@/features/Settings'
import { useUser } from '@/entities/User'

const profileSchema = z.object({
  firstName: z.string({ required_error: 'First name is required' }).min(2, 'First name should be at least 2 characters'),
  lastName: z.string({ required_error: 'Last name is required' }).min(2, 'Last name should be at least 2 characters'),
  email: z.string({ required_error: 'Email is required' }).email('Please enter a valid email address'),
  phone: z.string({ required_error: 'Phone is required' }).min(6, 'Phone number should be at least 6 digits'),
  gender: z.enum(['male', 'female'], {
    required_error: 'Please select your gender',
  }),
  birthDate: z.date({ required_error: 'Please select your date of birth' }),
  bio: z
    .string({ required_error: 'Bio is required' })
    .min(4, 'Bio should be at least 4 characters')
    .max(160, 'Bio should not exceed 160 characters'),
})

export const ProfileForm = () => {
  const { user } = useUser()
  const { trigger } = useUpdateProfile()

  const form = useForm({
    resolver: zodResolver(profileSchema),
    values: user && {
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      phone: user.phone || '',
      gender: user.gender || 'male',
      birthDate: user.birthDate ? new Date(user.birthDate) : undefined,
      bio: user.bio || '',
    },
    mode: 'onChange',
  })

  const { control, handleSubmit, reset } = form

  const onSubmit = async (data) => {
    try {
      await trigger(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+374..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Controller
          control={control}
          name="birthDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <DatePickerSimple value={field.value} onChange={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Share a few words about who you are" className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-wrap gap-2">
          <Button type="submit">Save Changes</Button>
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
        </div>
      </form>
    </Form>
  )
}
