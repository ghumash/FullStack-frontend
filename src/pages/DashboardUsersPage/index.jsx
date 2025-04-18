import { useState } from 'react'
import { Button, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, Loader } from '@/shared/ui'
import { UserForm, UsersTable } from '@/features/Dashboard'
import { useGetUsers } from '@/features/Dashboard'

const DashboardUsersPage = () => {
  const { users, isLoading, error } = useGetUsers()
  const [editingUser, setEditingUser] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleEdit = (user) => {
    setEditingUser(user)
    setIsDialogOpen(true)
  }

  const handleSuccess = () => {
    setEditingUser(null)
    setIsDialogOpen(false)
  }

  if (isLoading) return <Loader />
  if (error) return <div>Error loading users</div>

  return (
    <div className="space-y-4 px-4 md:px-8 lg:px-12">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="mt-4 md:mt-2 ml-auto" variant="default" onClick={() => setEditingUser(null)}>
            Add User
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-lg w-full sm:max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogTitle>User Form</DialogTitle>
          <DialogDescription className="mb-4 text-sm text-muted-foreground">
            Fill in the details below to create or update a user.
          </DialogDescription>

          <UserForm user={editingUser} onSuccess={handleSuccess} />
        </DialogContent>
      </Dialog>

      <UsersTable users={users} isLoading={isLoading} onEdit={handleEdit} />
    </div>
  )
}

export default DashboardUsersPage
