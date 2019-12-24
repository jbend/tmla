/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateLinkInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  target: string;
  icon?: string | null;
  linkType: LinkType;
  requiresElevatedPrivledges?: boolean | null;
};

export enum LinkType {
  APPLICATION = "APPLICATION",
  URL = "URL",
  FOLDER = "FOLDER"
}

export type ModelLinkConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  target?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  linkType?: ModelLinkTypeInput | null;
  requiresElevatedPrivledges?: ModelBooleanInput | null;
  and?: Array<ModelLinkConditionInput | null> | null;
  or?: Array<ModelLinkConditionInput | null> | null;
  not?: ModelLinkConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelLinkTypeInput = {
  eq?: LinkType | null;
  ne?: LinkType | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateLinkInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  target?: string | null;
  icon?: string | null;
  linkType?: LinkType | null;
  requiresElevatedPrivledges?: boolean | null;
};

export type DeleteLinkInput = {
  id?: string | null;
};

export type ModelLinkFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  target?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  linkType?: ModelLinkTypeInput | null;
  requiresElevatedPrivledges?: ModelBooleanInput | null;
  and?: Array<ModelLinkFilterInput | null> | null;
  or?: Array<ModelLinkFilterInput | null> | null;
  not?: ModelLinkFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateLinkMutation = {
  __typename: "Link";
  id: string;
  name: string;
  description: string | null;
  target: string;
  icon: string | null;
  linkType: LinkType;
  requiresElevatedPrivledges: boolean | null;
};

export type UpdateLinkMutation = {
  __typename: "Link";
  id: string;
  name: string;
  description: string | null;
  target: string;
  icon: string | null;
  linkType: LinkType;
  requiresElevatedPrivledges: boolean | null;
};

export type DeleteLinkMutation = {
  __typename: "Link";
  id: string;
  name: string;
  description: string | null;
  target: string;
  icon: string | null;
  linkType: LinkType;
  requiresElevatedPrivledges: boolean | null;
};

export type GetLinkQuery = {
  __typename: "Link";
  id: string;
  name: string;
  description: string | null;
  target: string;
  icon: string | null;
  linkType: LinkType;
  requiresElevatedPrivledges: boolean | null;
};

export type ListLinksQuery = {
  __typename: "ModelLinkConnection";
  items: Array<{
    __typename: "Link";
    id: string;
    name: string;
    description: string | null;
    target: string;
    icon: string | null;
    linkType: LinkType;
    requiresElevatedPrivledges: boolean | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateLinkSubscription = {
  __typename: "Link";
  id: string;
  name: string;
  description: string | null;
  target: string;
  icon: string | null;
  linkType: LinkType;
  requiresElevatedPrivledges: boolean | null;
};

export type OnUpdateLinkSubscription = {
  __typename: "Link";
  id: string;
  name: string;
  description: string | null;
  target: string;
  icon: string | null;
  linkType: LinkType;
  requiresElevatedPrivledges: boolean | null;
};

export type OnDeleteLinkSubscription = {
  __typename: "Link";
  id: string;
  name: string;
  description: string | null;
  target: string;
  icon: string | null;
  linkType: LinkType;
  requiresElevatedPrivledges: boolean | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateLink(
    input: CreateLinkInput,
    condition?: ModelLinkConditionInput
  ): Promise<CreateLinkMutation> {
    const statement = `mutation CreateLink($input: CreateLinkInput!, $condition: ModelLinkConditionInput) {
        createLink(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          target
          icon
          linkType
          requiresElevatedPrivledges
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLinkMutation>response.data.createLink;
  }
  async UpdateLink(
    input: UpdateLinkInput,
    condition?: ModelLinkConditionInput
  ): Promise<UpdateLinkMutation> {
    const statement = `mutation UpdateLink($input: UpdateLinkInput!, $condition: ModelLinkConditionInput) {
        updateLink(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          target
          icon
          linkType
          requiresElevatedPrivledges
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLinkMutation>response.data.updateLink;
  }
  async DeleteLink(
    input: DeleteLinkInput,
    condition?: ModelLinkConditionInput
  ): Promise<DeleteLinkMutation> {
    const statement = `mutation DeleteLink($input: DeleteLinkInput!, $condition: ModelLinkConditionInput) {
        deleteLink(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          target
          icon
          linkType
          requiresElevatedPrivledges
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLinkMutation>response.data.deleteLink;
  }
  async GetLink(id: string): Promise<GetLinkQuery> {
    const statement = `query GetLink($id: ID!) {
        getLink(id: $id) {
          __typename
          id
          name
          description
          target
          icon
          linkType
          requiresElevatedPrivledges
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLinkQuery>response.data.getLink;
  }
  async ListLinks(
    filter?: ModelLinkFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLinksQuery> {
    const statement = `query ListLinks($filter: ModelLinkFilterInput, $limit: Int, $nextToken: String) {
        listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            target
            icon
            linkType
            requiresElevatedPrivledges
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLinksQuery>response.data.listLinks;
  }
  OnCreateLinkListener: Observable<OnCreateLinkSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateLink {
        onCreateLink {
          __typename
          id
          name
          description
          target
          icon
          linkType
          requiresElevatedPrivledges
        }
      }`
    )
  ) as Observable<OnCreateLinkSubscription>;

  OnUpdateLinkListener: Observable<OnUpdateLinkSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLink {
        onUpdateLink {
          __typename
          id
          name
          description
          target
          icon
          linkType
          requiresElevatedPrivledges
        }
      }`
    )
  ) as Observable<OnUpdateLinkSubscription>;

  OnDeleteLinkListener: Observable<OnDeleteLinkSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLink {
        onDeleteLink {
          __typename
          id
          name
          description
          target
          icon
          linkType
          requiresElevatedPrivledges
        }
      }`
    )
  ) as Observable<OnDeleteLinkSubscription>;
}
