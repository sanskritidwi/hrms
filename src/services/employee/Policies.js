import React from 'react'
import PageHeader from '../../common/PageHeader';

const policy = "   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta suntexplicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit aut fugit, sed quia consequuntur magni dolores eos qui rationevoluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsumquia dolor sit amet, consectetur, adipisci velit, sed quia non numquamius modi tempora incidunt ut labore et dolore magnam aliquam quaeratvoluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullamorporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?uis autem vel eum iure reprehenderit qui in ea voluptate velit esseuam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quovoluptas nulla pariatur?"

const Policies = () => {
  return (
    <div className="PoliciesWrapper pageBody">
      <PageHeader pageheading="Policies"></PageHeader>
      <p>
     {policy}
      </p>
    </div>
  )
}

export default Policies
