import { ChildEntity, Column, TableInheritance } from 'typeorm';
import { PaymentEntity } from './payment.entity';

@ChildEntity({ name: 'payment_status' })
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class PaymentCreditCardEntity extends PaymentEntity {
  @Column({ name: 'amout_payments', nullable: false })
  amoutPayments: Date;
}
