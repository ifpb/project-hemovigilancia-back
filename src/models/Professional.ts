import { EntityRepository , Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityRepository('professionals')
class Professional {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  operation: string;
}

export default Professional;

