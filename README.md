# DSAI UI Library

A modern UI component library built with React, Tailwind CSS, and Radix UI.

## Features

- 🎨 Modern and clean design
- 🌙 Dark mode support
- 🎯 Accessible components using Radix UI
- 🎭 Customizable with Tailwind CSS
- 📦 Tree-shakeable exports
- 🔧 TypeScript support

## Installation

```bash
npm install @pixlr/dsai-ui
# or
yarn add @pixlr/dsai-ui
```

## Usage

```tsx
import { Button, Dialog, DropdownMenu, Toast, Toaster } from '@pixlr/dsai-ui';

function App() {
  return (
    <>
      <Button>Click me</Button>
      <Toaster />
    </>
  );
}
```

## Components

### Button
```tsx
import { Button } from '@pixlr/dsai-ui';

<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Dialog
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@pixlr/dsai-ui';

<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### DropdownMenu
```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@pixlr/dsai-ui';

<DropdownMenu>
  <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Toast
```tsx
import { useToast } from '@pixlr/dsai-ui';

function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 3:00 PM",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start development:
   ```bash
   yarn dev
   ```
4. Build:
   ```bash
   yarn build
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.