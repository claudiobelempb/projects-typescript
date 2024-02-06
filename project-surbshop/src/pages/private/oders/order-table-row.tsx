import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="w-3 h3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        821e78f7asdhdf128h
      </TableCell>

      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>

      <TableCell className="text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>

      <TableCell className="font-medium text-muted-foreground">
        Cláudio Cardoso
      </TableCell>

      <TableCell className="font-medium text-muted-foreground">
        R$ 144.90
      </TableCell>

      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="w-3 h3 mr-2" />
          <span>Aprovar</span>
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="w-3 h3 mr-2" />
          <span>Cacelar</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}
