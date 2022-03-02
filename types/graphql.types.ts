export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  DirectusSystemData_JSON: any;
  /** ISO8601 Date values */
  DirectusSystemData_Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  DirectusData_JSON: any;
  /** ISO8601 Date values */
  DirectusData_Date: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  flags?: Maybe<SiteFlags>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteFlags = {
  FAST_DEV?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type DirectusSystemGraphQlSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type DirectusGraphQlSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type DirectusSystemData_Extensions = {
  interfaces?: Maybe<Array<Maybe<Scalars['String']>>>;
  displays?: Maybe<Array<Maybe<Scalars['String']>>>;
  layouts?: Maybe<Array<Maybe<Scalars['String']>>>;
  modules?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectusSystemData_Graphql_Sdl_Scope =
  | 'items'
  | 'system';

export type DirectusSystemData_Server_Info = {
  project_name?: Maybe<Scalars['String']>;
  project_logo?: Maybe<Scalars['String']>;
  project_color?: Maybe<Scalars['String']>;
  project_foreground?: Maybe<Scalars['String']>;
  project_background?: Maybe<Scalars['String']>;
  project_note?: Maybe<Scalars['String']>;
  custom_css?: Maybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Collections = {
  collection?: Maybe<Scalars['String']>;
  meta?: Maybe<DirectusSystemData_Directus_Collections_Meta>;
  schema?: Maybe<DirectusSystemData_Directus_Collections_Schema>;
};

export type DirectusSystemData_Directus_Collections_Meta = {
  collection: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  display_template?: Maybe<Scalars['String']>;
  hidden: Scalars['Boolean'];
  singleton: Scalars['Boolean'];
  translations?: Maybe<Scalars['DirectusSystemData_JSON']>;
  archive_field?: Maybe<Scalars['String']>;
  archive_app_filter: Scalars['Boolean'];
  archive_value?: Maybe<Scalars['String']>;
  unarchive_value?: Maybe<Scalars['String']>;
  sort_field?: Maybe<Scalars['String']>;
  accountability?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  item_duplication_fields?: Maybe<Scalars['DirectusSystemData_JSON']>;
};

export type DirectusSystemData_Directus_Collections_Schema = {
  name?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Fields = {
  collection?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  meta?: Maybe<DirectusSystemData_Directus_Fields_Meta>;
  schema?: Maybe<DirectusSystemData_Directus_Fields_Schema>;
};

export type DirectusSystemData_Directus_Fields_Meta = {
  id: Scalars['Int'];
  collection: Scalars['String'];
  field: Scalars['String'];
  special?: Maybe<Scalars['DirectusSystemData_JSON']>;
  interface?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['DirectusSystemData_JSON']>;
  display?: Maybe<Scalars['String']>;
  display_options?: Maybe<Scalars['DirectusSystemData_JSON']>;
  readonly: Scalars['Boolean'];
  hidden: Scalars['Boolean'];
  sort?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['Int']>;
  translations?: Maybe<Scalars['DirectusSystemData_JSON']>;
  note?: Maybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Fields_Schema = {
  name?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  data_type?: Maybe<Scalars['String']>;
  default_value?: Maybe<Scalars['String']>;
  max_length?: Maybe<Scalars['Int']>;
  numeric_precision?: Maybe<Scalars['Int']>;
  numeric_scale?: Maybe<Scalars['Int']>;
  is_nullable?: Maybe<Scalars['Boolean']>;
  is_unique?: Maybe<Scalars['Boolean']>;
  is_primary_key?: Maybe<Scalars['Boolean']>;
  has_auto_increment?: Maybe<Scalars['Boolean']>;
  foreign_key_column?: Maybe<Scalars['String']>;
  foreign_key_table?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Relations = {
  collection?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  related_collection?: Maybe<Scalars['String']>;
  schema?: Maybe<DirectusSystemData_Directus_Relations_Schema>;
  meta?: Maybe<DirectusSystemData_Directus_Relations_Meta>;
};

export type DirectusSystemData_Directus_Relations_Schema = {
  table: Scalars['String'];
  column: Scalars['String'];
  foreign_key_table: Scalars['String'];
  foreign_key_column: Scalars['String'];
  constraint_name?: Maybe<Scalars['String']>;
  on_update: Scalars['String'];
  on_delete: Scalars['String'];
};

export type DirectusSystemData_Directus_Relations_Meta = {
  id?: Maybe<Scalars['Int']>;
  many_collection?: Maybe<Scalars['String']>;
  many_field?: Maybe<Scalars['String']>;
  one_collection?: Maybe<Scalars['String']>;
  one_field?: Maybe<Scalars['String']>;
  one_collection_field?: Maybe<Scalars['String']>;
  one_allowed_collections?: Maybe<Scalars['DirectusSystemData_JSON']>;
  junction_field?: Maybe<Scalars['String']>;
  sort_field?: Maybe<Scalars['String']>;
  one_deselect_action?: Maybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Users = {
  id?: Maybe<Scalars['ID']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['DirectusSystemData_JSON']>;
  avatar?: Maybe<DirectusSystemData_Directus_Files>;
  language?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  tfa_secret?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  role?: Maybe<DirectusSystemData_Directus_Roles>;
  token?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['DirectusSystemData_Date']>;
  last_page?: Maybe<Scalars['String']>;
};


export type DirectusSystemData_Directus_UsersAvatarArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemData_Directus_UsersRoleArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Roles_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Files = {
  id?: Maybe<Scalars['ID']>;
  storage: Scalars['String'];
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  folder?: Maybe<DirectusSystemData_Directus_Folders>;
  uploaded_by?: Maybe<DirectusSystemData_Directus_Users>;
  uploaded_on: Scalars['DirectusSystemData_Date'];
  modified_by?: Maybe<DirectusSystemData_Directus_Users>;
  modified_on: Scalars['DirectusSystemData_Date'];
  charset?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['DirectusSystemData_JSON']>;
  metadata?: Maybe<Scalars['DirectusSystemData_JSON']>;
  imageFile?: Maybe<File>;
};


export type DirectusSystemData_Directus_FilesFolderArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Folders_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemData_Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemData_Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Folders = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<DirectusSystemData_Directus_Folders>;
};


export type DirectusSystemData_Directus_FoldersParentArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Folders_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Folders_Filter = {
  id?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  name?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  parent?: InputMaybe<DirectusSystemData_Directus_Folders_Filter>;
  _and?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Folders_Filter>>>;
};

export type DirectusSystemData_String_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _contains?: InputMaybe<Scalars['String']>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
};

export type DirectusSystemData_Directus_Users_Filter = {
  id?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  first_name?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  last_name?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  email?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  password?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  location?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  title?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  description?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  tags?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  avatar?: InputMaybe<DirectusSystemData_Directus_Files_Filter>;
  language?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  theme?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  tfa_secret?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  status?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  role?: InputMaybe<DirectusSystemData_Directus_Roles_Filter>;
  token?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  last_access?: InputMaybe<DirectusSystemData_Date_Filter_Operators>;
  last_page?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Users_Filter>>>;
};

export type DirectusSystemData_Directus_Files_Filter = {
  id?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  storage?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  filename_disk?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  filename_download?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  title?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  type?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  folder?: InputMaybe<DirectusSystemData_Directus_Folders_Filter>;
  uploaded_by?: InputMaybe<DirectusSystemData_Directus_Users_Filter>;
  uploaded_on?: InputMaybe<DirectusSystemData_Date_Filter_Operators>;
  modified_by?: InputMaybe<DirectusSystemData_Directus_Users_Filter>;
  modified_on?: InputMaybe<DirectusSystemData_Date_Filter_Operators>;
  charset?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  filesize?: InputMaybe<DirectusSystemData_Number_Filter_Operators>;
  width?: InputMaybe<DirectusSystemData_Number_Filter_Operators>;
  height?: InputMaybe<DirectusSystemData_Number_Filter_Operators>;
  duration?: InputMaybe<DirectusSystemData_Number_Filter_Operators>;
  embed?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  description?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  location?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  tags?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  metadata?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Files_Filter>>>;
};

export type DirectusSystemData_Date_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
};

export type DirectusSystemData_Number_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
};

export type DirectusSystemData_Directus_Roles_Filter = {
  id?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  name?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  icon?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  description?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  ip_access?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  enforce_tfa?: InputMaybe<DirectusSystemData_Boolean_Filter_Operators>;
  module_list?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  collection_list?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  admin_access?: InputMaybe<DirectusSystemData_Boolean_Filter_Operators>;
  app_access?: InputMaybe<DirectusSystemData_Boolean_Filter_Operators>;
  users?: InputMaybe<DirectusSystemData_Directus_Users_Filter>;
  _and?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Roles_Filter>>>;
};

export type DirectusSystemData_Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
};

export type DirectusSystemData_Directus_Roles = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  icon: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ip_access?: Maybe<Scalars['DirectusSystemData_JSON']>;
  enforce_tfa: Scalars['Boolean'];
  module_list?: Maybe<Scalars['DirectusSystemData_JSON']>;
  collection_list?: Maybe<Scalars['DirectusSystemData_JSON']>;
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  users?: Maybe<Array<Maybe<DirectusSystemData_Directus_Users>>>;
};


export type DirectusSystemData_Directus_RolesUsersArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Presets = {
  id?: Maybe<Scalars['ID']>;
  bookmark?: Maybe<Scalars['String']>;
  user?: Maybe<DirectusSystemData_Directus_Users>;
  role?: Maybe<DirectusSystemData_Directus_Roles>;
  collection?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  filters?: Maybe<Scalars['DirectusSystemData_JSON']>;
  layout?: Maybe<Scalars['String']>;
  layout_query?: Maybe<Scalars['DirectusSystemData_JSON']>;
  layout_options?: Maybe<Scalars['DirectusSystemData_JSON']>;
  refresh_interval?: Maybe<Scalars['Int']>;
};


export type DirectusSystemData_Directus_PresetsUserArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemData_Directus_PresetsRoleArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Roles_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Presets_Filter = {
  id?: InputMaybe<DirectusSystemData_Number_Filter_Operators>;
  bookmark?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  user?: InputMaybe<DirectusSystemData_Directus_Users_Filter>;
  role?: InputMaybe<DirectusSystemData_Directus_Roles_Filter>;
  collection?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  search?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  filters?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  layout?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  layout_query?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  layout_options?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  refresh_interval?: InputMaybe<DirectusSystemData_Number_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Presets_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Presets_Filter>>>;
};

export type DirectusSystemData_Directus_Activity = {
  id?: Maybe<Scalars['ID']>;
  action: Scalars['String'];
  user?: Maybe<DirectusSystemData_Directus_Users>;
  timestamp: Scalars['DirectusSystemData_Date'];
  ip: Scalars['String'];
  user_agent?: Maybe<Scalars['String']>;
  collection: Scalars['String'];
  item: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  revisions?: Maybe<Scalars['String']>;
};


export type DirectusSystemData_Directus_ActivityUserArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Activity_Filter = {
  id?: InputMaybe<DirectusSystemData_Number_Filter_Operators>;
  action?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  user?: InputMaybe<DirectusSystemData_Directus_Users_Filter>;
  timestamp?: InputMaybe<DirectusSystemData_Date_Filter_Operators>;
  ip?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  user_agent?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  collection?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  item?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  comment?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  revisions?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Activity_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Activity_Filter>>>;
};

export type DirectusSystemData_Directus_Permissions = {
  id?: Maybe<Scalars['ID']>;
  role?: Maybe<DirectusSystemData_Directus_Roles>;
  collection: Scalars['String'];
  action: Scalars['String'];
  permissions?: Maybe<Scalars['DirectusSystemData_JSON']>;
  validation?: Maybe<Scalars['DirectusSystemData_JSON']>;
  presets?: Maybe<Scalars['DirectusSystemData_JSON']>;
  fields?: Maybe<Scalars['DirectusSystemData_JSON']>;
  limit?: Maybe<Scalars['Int']>;
};


export type DirectusSystemData_Directus_PermissionsRoleArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Roles_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusSystemData_Directus_Permissions_Filter = {
  id?: InputMaybe<DirectusSystemData_Number_Filter_Operators>;
  role?: InputMaybe<DirectusSystemData_Directus_Roles_Filter>;
  collection?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  action?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  permissions?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  validation?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  presets?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  fields?: InputMaybe<DirectusSystemData_String_Filter_Operators>;
  limit?: InputMaybe<DirectusSystemData_Number_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Permissions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusSystemData_Directus_Permissions_Filter>>>;
};

export type DirectusSystemData_Directus_Settings = {
  id?: Maybe<Scalars['ID']>;
  project_name: Scalars['String'];
  project_url?: Maybe<Scalars['String']>;
  /** Login & Logo Background */
  project_color?: Maybe<Scalars['String']>;
  project_logo?: Maybe<DirectusSystemData_Directus_Files>;
  public_foreground?: Maybe<DirectusSystemData_Directus_Files>;
  public_background?: Maybe<DirectusSystemData_Directus_Files>;
  public_note?: Maybe<Scalars['String']>;
  auth_login_attempts?: Maybe<Scalars['Int']>;
  auth_password_policy?: Maybe<Scalars['String']>;
  storage_asset_transform?: Maybe<Scalars['String']>;
  storage_asset_presets?: Maybe<Scalars['DirectusSystemData_JSON']>;
  custom_css?: Maybe<Scalars['String']>;
};


export type DirectusSystemData_Directus_SettingsProject_LogoArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemData_Directus_SettingsPublic_ForegroundArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemData_Directus_SettingsPublic_BackgroundArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusSystemData_Auth_Tokens = {
  access_token?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['Int']>;
  refresh_token?: Maybe<Scalars['String']>;
};

export type DirectusSystemData_Auth_Mode =
  | 'json'
  | 'cookie';

export type DirectusSystemData_Users_Me_Tfa_Generate_Data = {
  secret?: Maybe<Scalars['String']>;
  otpauth_url?: Maybe<Scalars['String']>;
};

export type DirectusSystemData_Create_Directus_Presets_Input = {
  id?: InputMaybe<Scalars['ID']>;
  bookmark?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  collection?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Scalars['DirectusSystemData_JSON']>;
  layout?: InputMaybe<Scalars['String']>;
  layout_query?: InputMaybe<Scalars['DirectusSystemData_JSON']>;
  layout_options?: InputMaybe<Scalars['DirectusSystemData_JSON']>;
  refresh_interval?: InputMaybe<Scalars['Int']>;
};

export type DirectusSystemData_Update_Directus_Presets_Input = {
  id?: InputMaybe<Scalars['ID']>;
  bookmark?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<DirectusSystemData_Update_Directus_Users_Input>;
  role?: InputMaybe<Scalars['String']>;
  collection?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Scalars['DirectusSystemData_JSON']>;
  layout?: InputMaybe<Scalars['String']>;
  layout_query?: InputMaybe<Scalars['DirectusSystemData_JSON']>;
  layout_options?: InputMaybe<Scalars['DirectusSystemData_JSON']>;
  refresh_interval?: InputMaybe<Scalars['Int']>;
};

export type DirectusSystemData_Update_Directus_Users_Input = {
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
};

export type DirectusSystemData_Delete_Many = {
  ids: Array<Maybe<Scalars['ID']>>;
};

export type DirectusSystemData_Delete_One = {
  id: Scalars['ID'];
};

export type DirectusSystemData = {
  extensions?: Maybe<DirectusSystemData_Extensions>;
  server_specs_oas?: Maybe<Scalars['DirectusSystemData_JSON']>;
  server_specs_graphql?: Maybe<Scalars['String']>;
  server_ping?: Maybe<Scalars['String']>;
  server_info?: Maybe<DirectusSystemData_Server_Info>;
  server_health?: Maybe<Scalars['DirectusSystemData_JSON']>;
  collections?: Maybe<Array<Maybe<DirectusSystemData_Directus_Collections>>>;
  collections_by_name?: Maybe<DirectusSystemData_Directus_Collections>;
  fields?: Maybe<Array<Maybe<DirectusSystemData_Directus_Fields>>>;
  fields_in_collection?: Maybe<Array<Maybe<DirectusSystemData_Directus_Fields>>>;
  fields_by_name?: Maybe<DirectusSystemData_Directus_Fields>;
  relations?: Maybe<Array<Maybe<DirectusSystemData_Directus_Relations>>>;
  relations_in_collection?: Maybe<Array<Maybe<DirectusSystemData_Directus_Relations>>>;
  relations_by_name?: Maybe<DirectusSystemData_Directus_Relations>;
  users_me?: Maybe<DirectusSystemData_Directus_Users>;
  files?: Maybe<Array<Maybe<DirectusSystemData_Directus_Files>>>;
  files_by_id?: Maybe<DirectusSystemData_Directus_Files>;
  folders?: Maybe<Array<Maybe<DirectusSystemData_Directus_Folders>>>;
  folders_by_id?: Maybe<DirectusSystemData_Directus_Folders>;
  presets?: Maybe<Array<Maybe<DirectusSystemData_Directus_Presets>>>;
  presets_by_id?: Maybe<DirectusSystemData_Directus_Presets>;
  activity?: Maybe<Array<Maybe<DirectusSystemData_Directus_Activity>>>;
  activity_by_id?: Maybe<DirectusSystemData_Directus_Activity>;
  permissions?: Maybe<Array<Maybe<DirectusSystemData_Directus_Permissions>>>;
  permissions_by_id?: Maybe<DirectusSystemData_Directus_Permissions>;
  settings?: Maybe<DirectusSystemData_Directus_Settings>;
  roles?: Maybe<Array<Maybe<DirectusSystemData_Directus_Roles>>>;
  roles_by_id?: Maybe<DirectusSystemData_Directus_Roles>;
  users?: Maybe<Array<Maybe<DirectusSystemData_Directus_Users>>>;
  users_by_id?: Maybe<DirectusSystemData_Directus_Users>;
};


export type DirectusSystemDataServer_Specs_GraphqlArgs = {
  scope?: InputMaybe<DirectusSystemData_Graphql_Sdl_Scope>;
};


export type DirectusSystemDataCollections_By_NameArgs = {
  name: Scalars['String'];
};


export type DirectusSystemDataFields_In_CollectionArgs = {
  collection: Scalars['String'];
};


export type DirectusSystemDataFields_By_NameArgs = {
  collection: Scalars['String'];
  field: Scalars['String'];
};


export type DirectusSystemDataRelations_In_CollectionArgs = {
  collection: Scalars['String'];
};


export type DirectusSystemDataRelations_By_NameArgs = {
  collection: Scalars['String'];
  field: Scalars['String'];
};


export type DirectusSystemDataFilesArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemDataFiles_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusSystemDataFoldersArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Folders_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemDataFolders_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusSystemDataPresetsArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Presets_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemDataPresets_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusSystemDataActivityArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Activity_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemDataActivity_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusSystemDataPermissionsArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Permissions_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemDataPermissions_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusSystemDataRolesArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Roles_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemDataRoles_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusSystemDataUsersArgs = {
  filter?: InputMaybe<DirectusSystemData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusSystemDataUsers_By_IdArgs = {
  id: Scalars['ID'];
};

export type DirectusData_Blog = {
  id?: Maybe<Scalars['ID']>;
  /** Select "Published" and click on save to publish this blog post */
  status: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<DirectusData_Directus_Users>;
  date_created?: Maybe<Scalars['DirectusData_Date']>;
  user_updated?: Maybe<DirectusData_Directus_Users>;
  date_updated?: Maybe<Scalars['DirectusData_Date']>;
  /** Maximum of 60 characters */
  blog_title: Scalars['String'];
  /** This will be shown as the published date for the blog post */
  published_date: Scalars['DirectusData_Date'];
  /** This blog will be featured in the Featured section of the blog homepage */
  featured: Scalars['Boolean'];
  /** Has to be in WHOLE numbers, e.g. (5)-minute read */
  read_time_in_minutes?: Maybe<Scalars['Int']>;
  /** Maximum of 158 characters */
  blog_description: Scalars['String'];
  author?: Maybe<DirectusData_Author>;
  /** Maximum of 60 characters */
  meta_title?: Maybe<Scalars['String']>;
  /** Maximum of 158 characters */
  meta_description?: Maybe<Scalars['String']>;
  blog_post?: Maybe<Scalars['String']>;
  side_banners?: Maybe<DirectusData_Side_Banners>;
  main_image?: Maybe<DirectusData_Directus_Files>;
  /** e.g. 'besquare-by-deriv' will have the link of https://deriv.com/academy/blog/posts/besquare-by-deriv */
  slug: Scalars['String'];
  footer_banners?: Maybe<DirectusData_Footer_Banners>;
  /** We will be removing this once VISIBILITY is all filled up */
  hide_for_eu: Scalars['Boolean'];
  /** Maximum of 55 characters */
  og_title?: Maybe<Scalars['String']>;
  /** Maximum of 55 characters */
  og_description?: Maybe<Scalars['String']>;
  /** Check this for hiding the article from the UI for testing purposes (mainly for QA) */
  test_data: Scalars['Boolean'];
  /** Choose an option for geo locking the content */
  visibility?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<DirectusData_Blog_Tags>>>;
};


export type DirectusData_BlogUser_CreatedArgs = {
  filter?: InputMaybe<DirectusData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_BlogUser_UpdatedArgs = {
  filter?: InputMaybe<DirectusData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_BlogAuthorArgs = {
  filter?: InputMaybe<DirectusData_Author_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_BlogSide_BannersArgs = {
  filter?: InputMaybe<DirectusData_Side_Banners_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_BlogMain_ImageArgs = {
  filter?: InputMaybe<DirectusData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_BlogFooter_BannersArgs = {
  filter?: InputMaybe<DirectusData_Footer_Banners_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_BlogTagsArgs = {
  filter?: InputMaybe<DirectusData_Blog_Tags_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Directus_Users = {
  id?: Maybe<Scalars['ID']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['DirectusData_JSON']>;
  avatar?: Maybe<DirectusData_Directus_Files>;
  language?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  tfa_secret?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  role?: Maybe<DirectusData_Directus_Roles>;
  token?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['DirectusData_Date']>;
  last_page?: Maybe<Scalars['String']>;
};


export type DirectusData_Directus_UsersAvatarArgs = {
  filter?: InputMaybe<DirectusData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_Directus_UsersRoleArgs = {
  filter?: InputMaybe<DirectusData_Directus_Roles_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Directus_Files = {
  id?: Maybe<Scalars['ID']>;
  storage: Scalars['String'];
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  folder?: Maybe<DirectusData_Directus_Folders>;
  uploaded_by?: Maybe<DirectusData_Directus_Users>;
  uploaded_on: Scalars['DirectusData_Date'];
  modified_by?: Maybe<DirectusData_Directus_Users>;
  modified_on: Scalars['DirectusData_Date'];
  charset?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['DirectusData_JSON']>;
  metadata?: Maybe<Scalars['DirectusData_JSON']>;
  imageFile?: Maybe<File>;
};


export type DirectusData_Directus_FilesFolderArgs = {
  filter?: InputMaybe<DirectusData_Directus_Folders_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<DirectusData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<DirectusData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Directus_Folders = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<DirectusData_Directus_Folders>;
};


export type DirectusData_Directus_FoldersParentArgs = {
  filter?: InputMaybe<DirectusData_Directus_Folders_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Directus_Folders_Filter = {
  id?: InputMaybe<DirectusData_String_Filter_Operators>;
  name?: InputMaybe<DirectusData_String_Filter_Operators>;
  parent?: InputMaybe<DirectusData_Directus_Folders_Filter>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Directus_Folders_Filter>>>;
};

export type DirectusData_String_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _contains?: InputMaybe<Scalars['String']>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
};

export type DirectusData_Directus_Users_Filter = {
  id?: InputMaybe<DirectusData_String_Filter_Operators>;
  first_name?: InputMaybe<DirectusData_String_Filter_Operators>;
  last_name?: InputMaybe<DirectusData_String_Filter_Operators>;
  email?: InputMaybe<DirectusData_String_Filter_Operators>;
  password?: InputMaybe<DirectusData_String_Filter_Operators>;
  location?: InputMaybe<DirectusData_String_Filter_Operators>;
  title?: InputMaybe<DirectusData_String_Filter_Operators>;
  description?: InputMaybe<DirectusData_String_Filter_Operators>;
  tags?: InputMaybe<DirectusData_String_Filter_Operators>;
  avatar?: InputMaybe<DirectusData_Directus_Files_Filter>;
  language?: InputMaybe<DirectusData_String_Filter_Operators>;
  theme?: InputMaybe<DirectusData_String_Filter_Operators>;
  tfa_secret?: InputMaybe<DirectusData_String_Filter_Operators>;
  status?: InputMaybe<DirectusData_String_Filter_Operators>;
  role?: InputMaybe<DirectusData_Directus_Roles_Filter>;
  token?: InputMaybe<DirectusData_String_Filter_Operators>;
  last_access?: InputMaybe<DirectusData_Date_Filter_Operators>;
  last_page?: InputMaybe<DirectusData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Directus_Users_Filter>>>;
};

export type DirectusData_Directus_Files_Filter = {
  id?: InputMaybe<DirectusData_String_Filter_Operators>;
  storage?: InputMaybe<DirectusData_String_Filter_Operators>;
  filename_disk?: InputMaybe<DirectusData_String_Filter_Operators>;
  filename_download?: InputMaybe<DirectusData_String_Filter_Operators>;
  title?: InputMaybe<DirectusData_String_Filter_Operators>;
  type?: InputMaybe<DirectusData_String_Filter_Operators>;
  folder?: InputMaybe<DirectusData_Directus_Folders_Filter>;
  uploaded_by?: InputMaybe<DirectusData_Directus_Users_Filter>;
  uploaded_on?: InputMaybe<DirectusData_Date_Filter_Operators>;
  modified_by?: InputMaybe<DirectusData_Directus_Users_Filter>;
  modified_on?: InputMaybe<DirectusData_Date_Filter_Operators>;
  charset?: InputMaybe<DirectusData_String_Filter_Operators>;
  filesize?: InputMaybe<DirectusData_Number_Filter_Operators>;
  width?: InputMaybe<DirectusData_Number_Filter_Operators>;
  height?: InputMaybe<DirectusData_Number_Filter_Operators>;
  duration?: InputMaybe<DirectusData_Number_Filter_Operators>;
  embed?: InputMaybe<DirectusData_String_Filter_Operators>;
  description?: InputMaybe<DirectusData_String_Filter_Operators>;
  location?: InputMaybe<DirectusData_String_Filter_Operators>;
  tags?: InputMaybe<DirectusData_String_Filter_Operators>;
  metadata?: InputMaybe<DirectusData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Directus_Files_Filter>>>;
};

export type DirectusData_Date_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
};

export type DirectusData_Number_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
};

export type DirectusData_Directus_Roles_Filter = {
  id?: InputMaybe<DirectusData_String_Filter_Operators>;
  name?: InputMaybe<DirectusData_String_Filter_Operators>;
  icon?: InputMaybe<DirectusData_String_Filter_Operators>;
  description?: InputMaybe<DirectusData_String_Filter_Operators>;
  ip_access?: InputMaybe<DirectusData_String_Filter_Operators>;
  enforce_tfa?: InputMaybe<DirectusData_Boolean_Filter_Operators>;
  module_list?: InputMaybe<DirectusData_String_Filter_Operators>;
  collection_list?: InputMaybe<DirectusData_String_Filter_Operators>;
  admin_access?: InputMaybe<DirectusData_Boolean_Filter_Operators>;
  app_access?: InputMaybe<DirectusData_Boolean_Filter_Operators>;
  users?: InputMaybe<DirectusData_Directus_Users_Filter>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Directus_Roles_Filter>>>;
};

export type DirectusData_Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
};

export type DirectusData_Directus_Roles = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  icon: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ip_access?: Maybe<Scalars['DirectusData_JSON']>;
  enforce_tfa: Scalars['Boolean'];
  module_list?: Maybe<Scalars['DirectusData_JSON']>;
  collection_list?: Maybe<Scalars['DirectusData_JSON']>;
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  users?: Maybe<Array<Maybe<DirectusData_Directus_Users>>>;
};


export type DirectusData_Directus_RolesUsersArgs = {
  filter?: InputMaybe<DirectusData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Author = {
  id?: Maybe<Scalars['ID']>;
  /** Name of the author shown on blog posts */
  name: Scalars['String'];
  image?: Maybe<DirectusData_Directus_Files>;
};


export type DirectusData_AuthorImageArgs = {
  filter?: InputMaybe<DirectusData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Author_Filter = {
  id?: InputMaybe<DirectusData_String_Filter_Operators>;
  name?: InputMaybe<DirectusData_String_Filter_Operators>;
  image?: InputMaybe<DirectusData_Directus_Files_Filter>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Author_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Author_Filter>>>;
};

export type DirectusData_Side_Banners = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  /** e.g. https://deriv.com/besquare */
  cta_url: Scalars['String'];
  /** This name will be used to identify the banners to be used in the blog post */
  name: Scalars['String'];
  banner_image?: Maybe<DirectusData_Directus_Files>;
};


export type DirectusData_Side_BannersBanner_ImageArgs = {
  filter?: InputMaybe<DirectusData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Side_Banners_Filter = {
  id?: InputMaybe<DirectusData_String_Filter_Operators>;
  status?: InputMaybe<DirectusData_String_Filter_Operators>;
  sort?: InputMaybe<DirectusData_Number_Filter_Operators>;
  cta_url?: InputMaybe<DirectusData_String_Filter_Operators>;
  name?: InputMaybe<DirectusData_String_Filter_Operators>;
  banner_image?: InputMaybe<DirectusData_Directus_Files_Filter>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Side_Banners_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Side_Banners_Filter>>>;
};

export type DirectusData_Footer_Banners = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  /** e.g. https://deriv.com/besquare */
  cta_url: Scalars['String'];
  /** This name will be used to identify the banners to be used in the blog post */
  name: Scalars['String'];
  desktop_banner_image?: Maybe<DirectusData_Directus_Files>;
  mobile_banner_image?: Maybe<DirectusData_Directus_Files>;
};


export type DirectusData_Footer_BannersDesktop_Banner_ImageArgs = {
  filter?: InputMaybe<DirectusData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_Footer_BannersMobile_Banner_ImageArgs = {
  filter?: InputMaybe<DirectusData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Footer_Banners_Filter = {
  id?: InputMaybe<DirectusData_Number_Filter_Operators>;
  status?: InputMaybe<DirectusData_String_Filter_Operators>;
  sort?: InputMaybe<DirectusData_Number_Filter_Operators>;
  cta_url?: InputMaybe<DirectusData_String_Filter_Operators>;
  name?: InputMaybe<DirectusData_String_Filter_Operators>;
  desktop_banner_image?: InputMaybe<DirectusData_Directus_Files_Filter>;
  mobile_banner_image?: InputMaybe<DirectusData_Directus_Files_Filter>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Footer_Banners_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Footer_Banners_Filter>>>;
};

export type DirectusData_Blog_Tags = {
  id?: Maybe<Scalars['ID']>;
  blog_id?: Maybe<DirectusData_Blog>;
  tags_id?: Maybe<DirectusData_Tags>;
};


export type DirectusData_Blog_TagsBlog_IdArgs = {
  filter?: InputMaybe<DirectusData_Blog_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_Blog_TagsTags_IdArgs = {
  filter?: InputMaybe<DirectusData_Tags_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Blog_Filter = {
  id?: InputMaybe<DirectusData_String_Filter_Operators>;
  status?: InputMaybe<DirectusData_String_Filter_Operators>;
  sort?: InputMaybe<DirectusData_Number_Filter_Operators>;
  user_created?: InputMaybe<DirectusData_Directus_Users_Filter>;
  date_created?: InputMaybe<DirectusData_Date_Filter_Operators>;
  user_updated?: InputMaybe<DirectusData_Directus_Users_Filter>;
  date_updated?: InputMaybe<DirectusData_Date_Filter_Operators>;
  blog_title?: InputMaybe<DirectusData_String_Filter_Operators>;
  published_date?: InputMaybe<DirectusData_Date_Filter_Operators>;
  featured?: InputMaybe<DirectusData_Boolean_Filter_Operators>;
  read_time_in_minutes?: InputMaybe<DirectusData_Number_Filter_Operators>;
  blog_description?: InputMaybe<DirectusData_String_Filter_Operators>;
  author?: InputMaybe<DirectusData_Author_Filter>;
  meta_title?: InputMaybe<DirectusData_String_Filter_Operators>;
  meta_description?: InputMaybe<DirectusData_String_Filter_Operators>;
  blog_post?: InputMaybe<DirectusData_String_Filter_Operators>;
  side_banners?: InputMaybe<DirectusData_Side_Banners_Filter>;
  main_image?: InputMaybe<DirectusData_Directus_Files_Filter>;
  slug?: InputMaybe<DirectusData_String_Filter_Operators>;
  footer_banners?: InputMaybe<DirectusData_Footer_Banners_Filter>;
  hide_for_eu?: InputMaybe<DirectusData_Boolean_Filter_Operators>;
  og_title?: InputMaybe<DirectusData_String_Filter_Operators>;
  og_description?: InputMaybe<DirectusData_String_Filter_Operators>;
  test_data?: InputMaybe<DirectusData_Boolean_Filter_Operators>;
  visibility?: InputMaybe<DirectusData_String_Filter_Operators>;
  tags?: InputMaybe<DirectusData_Blog_Tags_Filter>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Blog_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Blog_Filter>>>;
};

export type DirectusData_Blog_Tags_Filter = {
  id?: InputMaybe<DirectusData_Number_Filter_Operators>;
  blog_id?: InputMaybe<DirectusData_Blog_Filter>;
  tags_id?: InputMaybe<DirectusData_Tags_Filter>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Blog_Tags_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Blog_Tags_Filter>>>;
};

export type DirectusData_Tags_Filter = {
  id?: InputMaybe<DirectusData_String_Filter_Operators>;
  tag_name?: InputMaybe<DirectusData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Tags_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Tags_Filter>>>;
};

export type DirectusData_Tags = {
  id?: Maybe<Scalars['ID']>;
  tag_name: Scalars['String'];
};

export type DirectusData_Homepage_Banners = {
  id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  /** The page to open when clicking on the banner */
  link: Scalars['String'];
  /** Banner title */
  heading: Scalars['String'];
  /** Banner description */
  sub_heading: Scalars['String'];
  image?: Maybe<DirectusData_Directus_Files>;
  /** Order of banners on the homepage */
  order?: Maybe<Scalars['String']>;
  /** Choose an option for geo locking the content */
  visibility: Scalars['String'];
  button_text: Scalars['String'];
};


export type DirectusData_Homepage_BannersImageArgs = {
  filter?: InputMaybe<DirectusData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Homepage_Banners_Filter = {
  id?: InputMaybe<DirectusData_String_Filter_Operators>;
  status?: InputMaybe<DirectusData_String_Filter_Operators>;
  sort?: InputMaybe<DirectusData_Number_Filter_Operators>;
  link?: InputMaybe<DirectusData_String_Filter_Operators>;
  heading?: InputMaybe<DirectusData_String_Filter_Operators>;
  sub_heading?: InputMaybe<DirectusData_String_Filter_Operators>;
  image?: InputMaybe<DirectusData_Directus_Files_Filter>;
  order?: InputMaybe<DirectusData_String_Filter_Operators>;
  visibility?: InputMaybe<DirectusData_String_Filter_Operators>;
  button_text?: InputMaybe<DirectusData_String_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Homepage_Banners_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Homepage_Banners_Filter>>>;
};

export type DirectusData_Videos = {
  video_id?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<DirectusData_Directus_Users>;
  date_created?: Maybe<Scalars['DirectusData_Date']>;
  user_updated?: Maybe<DirectusData_Directus_Users>;
  date_updated?: Maybe<Scalars['DirectusData_Date']>;
  video_file?: Maybe<DirectusData_Directus_Files>;
  video_thumbnail?: Maybe<DirectusData_Directus_Files>;
  /** Add a video duration, e.g. "01:25" */
  video_duration: Scalars['String'];
  /** Add featured video (will be displayed in home page) *There should only be ONE featured video* */
  featured: Scalars['Boolean'];
  /** * Please make sure that the video slug is the same as video title */
  video_slug?: Maybe<Scalars['String']>;
  /** Add a video title */
  video_title?: Maybe<Scalars['String']>;
  /** Sets the published date shown on the page */
  published_date: Scalars['DirectusData_Date'];
  /** Add a description for your video */
  video_description?: Maybe<Scalars['String']>;
  /** Checking this hides the video for EU */
  hide_for_eu: Scalars['Boolean'];
  vimeo_id?: Maybe<Scalars['String']>;
  /** Choose an option for geo locking the content */
  visibility: Scalars['String'];
  tags?: Maybe<Array<Maybe<DirectusData_Videos_Tags>>>;
};


export type DirectusData_VideosUser_CreatedArgs = {
  filter?: InputMaybe<DirectusData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_VideosUser_UpdatedArgs = {
  filter?: InputMaybe<DirectusData_Directus_Users_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_VideosVideo_FileArgs = {
  filter?: InputMaybe<DirectusData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_VideosVideo_ThumbnailArgs = {
  filter?: InputMaybe<DirectusData_Directus_Files_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_VideosTagsArgs = {
  filter?: InputMaybe<DirectusData_Videos_Tags_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Videos_Tags = {
  id?: Maybe<Scalars['ID']>;
  tags_id?: Maybe<DirectusData_Tags>;
  videos_video_id?: Maybe<DirectusData_Videos>;
};


export type DirectusData_Videos_TagsTags_IdArgs = {
  filter?: InputMaybe<DirectusData_Tags_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusData_Videos_TagsVideos_Video_IdArgs = {
  filter?: InputMaybe<DirectusData_Videos_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type DirectusData_Videos_Filter = {
  video_id?: InputMaybe<DirectusData_String_Filter_Operators>;
  status?: InputMaybe<DirectusData_String_Filter_Operators>;
  sort?: InputMaybe<DirectusData_Number_Filter_Operators>;
  user_created?: InputMaybe<DirectusData_Directus_Users_Filter>;
  date_created?: InputMaybe<DirectusData_Date_Filter_Operators>;
  user_updated?: InputMaybe<DirectusData_Directus_Users_Filter>;
  date_updated?: InputMaybe<DirectusData_Date_Filter_Operators>;
  video_file?: InputMaybe<DirectusData_Directus_Files_Filter>;
  video_thumbnail?: InputMaybe<DirectusData_Directus_Files_Filter>;
  video_duration?: InputMaybe<DirectusData_String_Filter_Operators>;
  featured?: InputMaybe<DirectusData_Boolean_Filter_Operators>;
  video_slug?: InputMaybe<DirectusData_String_Filter_Operators>;
  video_title?: InputMaybe<DirectusData_String_Filter_Operators>;
  published_date?: InputMaybe<DirectusData_Date_Filter_Operators>;
  video_description?: InputMaybe<DirectusData_String_Filter_Operators>;
  hide_for_eu?: InputMaybe<DirectusData_Boolean_Filter_Operators>;
  vimeo_id?: InputMaybe<DirectusData_String_Filter_Operators>;
  visibility?: InputMaybe<DirectusData_String_Filter_Operators>;
  tags?: InputMaybe<DirectusData_Videos_Tags_Filter>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Videos_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Videos_Filter>>>;
};

export type DirectusData_Videos_Tags_Filter = {
  id?: InputMaybe<DirectusData_Number_Filter_Operators>;
  tags_id?: InputMaybe<DirectusData_Tags_Filter>;
  videos_video_id?: InputMaybe<DirectusData_Videos_Filter>;
  _and?: InputMaybe<Array<InputMaybe<DirectusData_Videos_Tags_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusData_Videos_Tags_Filter>>>;
};

export type DirectusData = {
  blog?: Maybe<Array<Maybe<DirectusData_Blog>>>;
  blog_by_id?: Maybe<DirectusData_Blog>;
  author?: Maybe<Array<Maybe<DirectusData_Author>>>;
  author_by_id?: Maybe<DirectusData_Author>;
  side_banners?: Maybe<Array<Maybe<DirectusData_Side_Banners>>>;
  side_banners_by_id?: Maybe<DirectusData_Side_Banners>;
  homepage_banners?: Maybe<Array<Maybe<DirectusData_Homepage_Banners>>>;
  homepage_banners_by_id?: Maybe<DirectusData_Homepage_Banners>;
  videos?: Maybe<Array<Maybe<DirectusData_Videos>>>;
  videos_by_id?: Maybe<DirectusData_Videos>;
  tags?: Maybe<Array<Maybe<DirectusData_Tags>>>;
  tags_by_id?: Maybe<DirectusData_Tags>;
  blog_tags?: Maybe<Array<Maybe<DirectusData_Blog_Tags>>>;
  blog_tags_by_id?: Maybe<DirectusData_Blog_Tags>;
  videos_tags?: Maybe<Array<Maybe<DirectusData_Videos_Tags>>>;
  videos_tags_by_id?: Maybe<DirectusData_Videos_Tags>;
  footer_banners?: Maybe<Array<Maybe<DirectusData_Footer_Banners>>>;
  footer_banners_by_id?: Maybe<DirectusData_Footer_Banners>;
};


export type DirectusDataBlogArgs = {
  filter?: InputMaybe<DirectusData_Blog_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusDataBlog_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusDataAuthorArgs = {
  filter?: InputMaybe<DirectusData_Author_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusDataAuthor_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusDataSide_BannersArgs = {
  filter?: InputMaybe<DirectusData_Side_Banners_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusDataSide_Banners_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusDataHomepage_BannersArgs = {
  filter?: InputMaybe<DirectusData_Homepage_Banners_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusDataHomepage_Banners_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusDataVideosArgs = {
  filter?: InputMaybe<DirectusData_Videos_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusDataVideos_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusDataTagsArgs = {
  filter?: InputMaybe<DirectusData_Tags_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusDataTags_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusDataBlog_TagsArgs = {
  filter?: InputMaybe<DirectusData_Blog_Tags_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusDataBlog_Tags_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusDataVideos_TagsArgs = {
  filter?: InputMaybe<DirectusData_Videos_Tags_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusDataVideos_Tags_By_IdArgs = {
  id: Scalars['ID'];
};


export type DirectusDataFooter_BannersArgs = {
  filter?: InputMaybe<DirectusData_Footer_Banners_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type DirectusDataFooter_Banners_By_IdArgs = {
  id: Scalars['ID'];
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  directusSystemGraphQlSource?: Maybe<DirectusSystemGraphQlSource>;
  allDirectusSystemGraphQlSource: DirectusSystemGraphQlSourceConnection;
  directusGraphQlSource?: Maybe<DirectusGraphQlSource>;
  allDirectusGraphQlSource: DirectusGraphQlSourceConnection;
  directus_system: DirectusSystemData;
  directus: DirectusData;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  flags?: InputMaybe<SiteFlagsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectusSystemGraphQlSourceArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  typeName?: InputMaybe<StringQueryOperatorInput>;
  fieldName?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllDirectusSystemGraphQlSourceArgs = {
  filter?: InputMaybe<DirectusSystemGraphQlSourceFilterInput>;
  sort?: InputMaybe<DirectusSystemGraphQlSourceSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectusGraphQlSourceArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  typeName?: InputMaybe<StringQueryOperatorInput>;
  fieldName?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllDirectusGraphQlSourceArgs = {
  filter?: InputMaybe<DirectusGraphQlSourceFilterInput>;
  sort?: InputMaybe<DirectusGraphQlSourceSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFlagsFilterInput = {
  FAST_DEV?: InputMaybe<BooleanQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'flags___FAST_DEV'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  flags?: InputMaybe<SiteFlagsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DirectusSystemGraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectusSystemGraphQlSourceEdge>;
  nodes: Array<DirectusSystemGraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectusSystemGraphQlSourceGroupConnection>;
};


export type DirectusSystemGraphQlSourceConnectionDistinctArgs = {
  field: DirectusSystemGraphQlSourceFieldsEnum;
};


export type DirectusSystemGraphQlSourceConnectionMaxArgs = {
  field: DirectusSystemGraphQlSourceFieldsEnum;
};


export type DirectusSystemGraphQlSourceConnectionMinArgs = {
  field: DirectusSystemGraphQlSourceFieldsEnum;
};


export type DirectusSystemGraphQlSourceConnectionSumArgs = {
  field: DirectusSystemGraphQlSourceFieldsEnum;
};


export type DirectusSystemGraphQlSourceConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectusSystemGraphQlSourceFieldsEnum;
};

export type DirectusSystemGraphQlSourceEdge = {
  next?: Maybe<DirectusSystemGraphQlSource>;
  node: DirectusSystemGraphQlSource;
  previous?: Maybe<DirectusSystemGraphQlSource>;
};

export type DirectusSystemGraphQlSourceFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'typeName'
  | 'fieldName';

export type DirectusSystemGraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectusSystemGraphQlSourceEdge>;
  nodes: Array<DirectusSystemGraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectusSystemGraphQlSourceGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectusSystemGraphQlSourceGroupConnectionDistinctArgs = {
  field: DirectusSystemGraphQlSourceFieldsEnum;
};


export type DirectusSystemGraphQlSourceGroupConnectionMaxArgs = {
  field: DirectusSystemGraphQlSourceFieldsEnum;
};


export type DirectusSystemGraphQlSourceGroupConnectionMinArgs = {
  field: DirectusSystemGraphQlSourceFieldsEnum;
};


export type DirectusSystemGraphQlSourceGroupConnectionSumArgs = {
  field: DirectusSystemGraphQlSourceFieldsEnum;
};


export type DirectusSystemGraphQlSourceGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectusSystemGraphQlSourceFieldsEnum;
};

export type DirectusSystemGraphQlSourceFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  typeName?: InputMaybe<StringQueryOperatorInput>;
  fieldName?: InputMaybe<StringQueryOperatorInput>;
};

export type DirectusSystemGraphQlSourceSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectusSystemGraphQlSourceFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DirectusGraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectusGraphQlSourceEdge>;
  nodes: Array<DirectusGraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectusGraphQlSourceGroupConnection>;
};


export type DirectusGraphQlSourceConnectionDistinctArgs = {
  field: DirectusGraphQlSourceFieldsEnum;
};


export type DirectusGraphQlSourceConnectionMaxArgs = {
  field: DirectusGraphQlSourceFieldsEnum;
};


export type DirectusGraphQlSourceConnectionMinArgs = {
  field: DirectusGraphQlSourceFieldsEnum;
};


export type DirectusGraphQlSourceConnectionSumArgs = {
  field: DirectusGraphQlSourceFieldsEnum;
};


export type DirectusGraphQlSourceConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectusGraphQlSourceFieldsEnum;
};

export type DirectusGraphQlSourceEdge = {
  next?: Maybe<DirectusGraphQlSource>;
  node: DirectusGraphQlSource;
  previous?: Maybe<DirectusGraphQlSource>;
};

export type DirectusGraphQlSourceFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'typeName'
  | 'fieldName';

export type DirectusGraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectusGraphQlSourceEdge>;
  nodes: Array<DirectusGraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectusGraphQlSourceGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectusGraphQlSourceGroupConnectionDistinctArgs = {
  field: DirectusGraphQlSourceFieldsEnum;
};


export type DirectusGraphQlSourceGroupConnectionMaxArgs = {
  field: DirectusGraphQlSourceFieldsEnum;
};


export type DirectusGraphQlSourceGroupConnectionMinArgs = {
  field: DirectusGraphQlSourceFieldsEnum;
};


export type DirectusGraphQlSourceGroupConnectionSumArgs = {
  field: DirectusGraphQlSourceFieldsEnum;
};


export type DirectusGraphQlSourceGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectusGraphQlSourceFieldsEnum;
};

export type DirectusGraphQlSourceFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  typeName?: InputMaybe<StringQueryOperatorInput>;
  fieldName?: InputMaybe<StringQueryOperatorInput>;
};

export type DirectusGraphQlSourceSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectusGraphQlSourceFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type AcademyIndexFragment = { directus: { homepage_banners?: Array<{ order?: string | null, id?: string | null, button_text: string, link: string, heading: string, sub_heading: string, image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, homepage_banners_eu?: Array<{ order?: string | null, id?: string | null, button_text: string, link: string, heading: string, sub_heading: string, image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, homepage_banners_uk?: Array<{ order?: string | null, id?: string | null, button_text: string, link: string, heading: string, sub_heading: string, image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, market_news?: Array<{ id?: string | null, blog_title: string, slug: string, blog_post?: string | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null, main_image?: { description?: string | null, id?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, market_news_eu?: Array<{ id?: string | null, blog_title: string, slug: string, blog_post?: string | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null, main_image?: { description?: string | null, id?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, market_news_uk?: Array<{ id?: string | null, blog_title: string, slug: string, blog_post?: string | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null, main_image?: { description?: string | null, id?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, videos?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, videos_eu?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, videos_uk?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured_video?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured_video_eu?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured_video_uk?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, recent?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null, recent_eu?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null, recent_uk?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured_eu?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured_uk?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null } };

export type HeroImageFragment = { childImageSharp?: { gatsbyImageData: any } | null };

export type BannerImageFragment = { childImageSharp?: { gatsbyImageData: any } | null };

export type FadeInFragment = { childImageSharp?: { gatsbyImageData: any } | null };

export type HomePageHeroFadeInFragment = { childImageSharp?: { gatsbyImageData: any } | null };

export type StoreQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type StoreQueryQuery = { directus: { blog?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null, videos?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { id: string, childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null } };

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = { directus: { videos_tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null, blog_tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } };

export type AllArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArticlesQuery = { directus: { blog?: Array<{ id?: string | null, slug: string, featured: boolean, visibility?: string | null, blog_title: string, blog_description: string, blog_post?: string | null, published_date: any, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null } };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { directus: { homepage_banners?: Array<{ order?: string | null, id?: string | null, button_text: string, link: string, heading: string, sub_heading: string, image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, homepage_banners_eu?: Array<{ order?: string | null, id?: string | null, button_text: string, link: string, heading: string, sub_heading: string, image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, homepage_banners_uk?: Array<{ order?: string | null, id?: string | null, button_text: string, link: string, heading: string, sub_heading: string, image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, market_news?: Array<{ id?: string | null, blog_title: string, slug: string, blog_post?: string | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null, main_image?: { description?: string | null, id?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, market_news_eu?: Array<{ id?: string | null, blog_title: string, slug: string, blog_post?: string | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null, main_image?: { description?: string | null, id?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, market_news_uk?: Array<{ id?: string | null, blog_title: string, slug: string, blog_post?: string | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null, main_image?: { description?: string | null, id?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null, videos?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, videos_eu?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, videos_uk?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured_video?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured_video_eu?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured_video_uk?: Array<{ video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, featured: boolean, video_thumbnail?: { id?: string | null, title?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, video_file?: { id?: string | null } | null, tags?: Array<{ tags_id?: { tag_name: string } | null } | null> | null } | null> | null, recent?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null, recent_eu?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null, recent_uk?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured_eu?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null, featured_uk?: Array<{ id?: string | null, slug: string, published_date: any, featured: boolean, blog_title: string, blog_description: string, blog_post?: string | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { tag_name: string } | null } | null> | null } | null> | null } };

export type AllVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type AllVideosQuery = { directus: { videos?: Array<{ video_id?: string | null, video_slug?: string | null, video_title?: string | null, published_date: any, video_description?: string | null, video_duration: string, visibility: string, tags?: Array<{ tags_id?: { tag_name: string, id?: string | null } | null } | null> | null, video_file?: { id?: string | null } | null, video_thumbnail?: { id?: string | null, imageFile?: { id: string, childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null> | null } };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { deriv_platform?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = { hero_background_desktop?: { childImageSharp?: { gatsbyImageData: any } | null } | null, hero_background_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_4_Query = { bug_report_desktop?: { childImageSharp?: { gatsbyImageData: any } | null } | null, bug_report_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_5_Query = { back_end_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, business_excellence_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, compliance_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cs_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, security_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, finance_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, front_end_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, internal_audit_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, marketing_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, payments_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, people_management_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, product_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pm_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, software_testing_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, trading_operations_desc?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_6_Query = { back_end_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, business_excellence_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, compliance_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cs_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, security_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, finance_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, front_end_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, internal_audit_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, marketing_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, payments_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, people_management_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, product_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pm_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, software_testing_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null, trading_operations_bg?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_7_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_7_Query = { marketing_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, marketing_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, people_management_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, people_management_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, finance_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, finance_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, payments_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, payments_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, fe_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, fe_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, product_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, product_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, trading_operations_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, trading_operations_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cs_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cs_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, compliance_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, compliance_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, back_end_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, back_end_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, security_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, security_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, business_excellence_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, business_excellence_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, software_testing_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, software_testing_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, internal_audit_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, internal_audit_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pm_review?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pm_review_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_8_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_8_Query = { image?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_9_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_9_Query = { backendDevelopment?: { childImageSharp?: { gatsbyImageData: any } | null } | null, businessExcellence?: { childImageSharp?: { gatsbyImageData: any } | null } | null, customerSupport?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cyberSecurityIT?: { childImageSharp?: { gatsbyImageData: any } | null } | null, financeAccounts?: { childImageSharp?: { gatsbyImageData: any } | null } | null, frontendDevelopment?: { childImageSharp?: { gatsbyImageData: any } | null } | null, internalAudit?: { childImageSharp?: { gatsbyImageData: any } | null } | null, legalCompliance?: { childImageSharp?: { gatsbyImageData: any } | null } | null, marketingGlobalPartnerships?: { childImageSharp?: { gatsbyImageData: any } | null } | null, paymentSolutionsIntegration?: { childImageSharp?: { gatsbyImageData: any } | null } | null, peopleManagement?: { childImageSharp?: { gatsbyImageData: any } | null } | null, productDesignUX?: { childImageSharp?: { gatsbyImageData: any } | null } | null, projectManagement?: { childImageSharp?: { gatsbyImageData: any } | null } | null, softwareTesting?: { childImageSharp?: { gatsbyImageData: any } | null } | null, tradingOperations?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_10_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_10_Query = { teamfocus?: { childImageSharp?: { gatsbyImageData: any } | null } | null, peopleeating?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_11_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_11_Query = { participant_img1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, participant_img2?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_12_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_12_Query = { asuncion?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_asuncion?: { childImageSharp?: { gatsbyImageData: any } | null } | null, asuncion_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, asuncion_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, asuncion_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, asuncion_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_asuncion?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_13_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_13_Query = { cyberjaya?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_cyberjaya?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cyberjaya_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cyberjaya_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cyberjaya_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cyberjaya_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_14_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_14_Query = { cyprus?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_cyprus?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cyprus_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cyprus_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cyprus_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, cyprus_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_cyprus?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_15_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_15_Query = { dubai?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_dubai?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dubai_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dubai_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dubai_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dubai_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_dubai?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_16_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_16_Query = { guernsey?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_guernsey?: { childImageSharp?: { gatsbyImageData: any } | null } | null, guernsey_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, guernsey_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, guernsey_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, guernsey_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, guernsey_map?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_17_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_17_Query = { thumbnail_cyberjaya?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_dubai?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_labuan?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_malta?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_asuncion?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_ipoh?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_melaka?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_cyprus?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_rwanda?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_minsk?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_paris?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_london?: { childImageSharp?: { gatsbyImageData: any } | null } | null, thumbnail_guernsey?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_18_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_18_Query = { ipoh?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_ipoh?: { childImageSharp?: { gatsbyImageData: any } | null } | null, ipoh_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, ipoh_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, ipoh_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, ipoh_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_ipoh?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_19_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_19_Query = { labuan?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_labuan?: { childImageSharp?: { gatsbyImageData: any } | null } | null, labuan_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, labuan_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, labuan_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, labuan_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_labuan?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_20_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_20_Query = { london?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_london?: { childImageSharp?: { gatsbyImageData: any } | null } | null, london_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, london_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, london_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, london_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, london_map?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_21_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_21_Query = { malta?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_malta?: { childImageSharp?: { gatsbyImageData: any } | null } | null, malta_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, malta_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, malta_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, malta_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_22_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_22_Query = { melaka?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_melaka?: { childImageSharp?: { gatsbyImageData: any } | null } | null, melaka_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, melaka_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, melaka_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, melaka_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_melaka?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_23_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_23_Query = { minsk?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_minsk?: { childImageSharp?: { gatsbyImageData: any } | null } | null, minsk_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, minsk_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, minsk_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, minsk_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, minsk_map?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_24_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_24_Query = { paris?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_paris?: { childImageSharp?: { gatsbyImageData: any } | null } | null, paris_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, paris_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, paris_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, paris_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, paris_map?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_25_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_25_Query = { rwanda?: { childImageSharp?: { gatsbyImageData: any } | null } | null, living_in_rwanda?: { childImageSharp?: { gatsbyImageData: any } | null } | null, rwanda_grid_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, rwanda_grid_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, rwanda_grid_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, rwanda_grid_4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, rwanda_map?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_26_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_26_Query = { community?: { childImageSharp?: { gatsbyImageData: any } | null } | null, help?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_27_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_27_Query = { map_paraguay?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_dubai?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_labuan?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_ipoh?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_melaka?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_malta?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_cyberjaya?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_cyprus?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_rwanda?: { childImageSharp?: { gatsbyImageData: any } | null } | null, map_belarus_contact?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_28_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_28_Query = { demo_step1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step1_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step2_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step3_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step1_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step2_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step3_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step4_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_29_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_29_Query = { deriv_platform?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_30_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_30_Query = { subscriber_step_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, subscriber_step_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, subscriber_step_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, provider_step_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, provider_step_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, provider_step_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, subscriber_step_1_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, subscriber_step_2_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, subscriber_step_3_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, provider_step_1_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, provider_step_2_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, provider_step_3_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_31_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_31_Query = { signals?: { childImageSharp?: { gatsbyImageData: any } | null } | null, statistics?: { childImageSharp?: { gatsbyImageData: any } | null } | null, renew?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_32_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_32_Query = { step_1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, step_2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, step_3?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_33_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_33_Query = { mobile_phone?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_34_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_34_Query = { margin_calculator?: { childImageSharp?: { gatsbyImageData: any } | null } | null, margin_calculator_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, swap_calculator?: { childImageSharp?: { gatsbyImageData: any } | null } | null, swap_calculator_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_35_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_35_Query = { demo_step1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step1_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step2_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step2_eu?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step2_mobile_eu?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, demo_step3_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step1_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step2_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step3_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step3_eu?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step3_mobile_eu?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, real_step4_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_36_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_36_Query = { deriv_platform?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_37_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_37_Query = { deriv_platform?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_38_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_38_Query = { dtrader_artboard?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_39_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_39_Query = { affiliate?: { childImageSharp?: { gatsbyImageData: any } | null } | null, smart_trader?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt5?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dbot?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_40_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_40_Query = { deriv?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_41_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_41_Query = { dbot?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_42_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_42_Query = { deriv?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_43_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_43_Query = { dmt5?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_44_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_44_Query = { deriv?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_45_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_45_Query = { deriv_platform?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_46_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_46_Query = { crypto_hero?: { childImageSharp?: { gatsbyImageData: any } | null } | null, crypto_inside?: { childImageSharp?: { gatsbyImageData: any } | null } | null, crypto_hero_es?: { childImageSharp?: { gatsbyImageData: any } | null } | null, crypto_inside_es?: { childImageSharp?: { gatsbyImageData: any } | null } | null, crypto_hero_pt?: { childImageSharp?: { gatsbyImageData: any } | null } | null, crypto_inside_pt?: { childImageSharp?: { gatsbyImageData: any } | null } | null, crypto_hero_fr?: { childImageSharp?: { gatsbyImageData: any } | null } | null, crypto_inside_fr?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_47_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_47_Query = { forex_ebook_img_en?: { childImageSharp?: { gatsbyImageData: any } | null } | null, forex_ebook_img_es?: { childImageSharp?: { gatsbyImageData: any } | null } | null, forex_ebook_inside_en?: { childImageSharp?: { gatsbyImageData: any } | null } | null, forex_ebook_inside_es?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_48_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_48_Query = { stocks_ebook_img?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stocks_ebook_inside?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_49_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_49_Query = { p2p_hero_background?: { childImageSharp?: { gatsbyImageData: any } | null } | null, p2p_hero_background_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_50_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_50_Query = { login?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt5_acc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt5_login?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_51_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_51_Query = { dbot_strategy?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dbot_build_strategy?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dbot_maximise_profits?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dbot_track_your_performance?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dbot_get_integrated_help?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dbot_save_your_strategies?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt_5_ipad_iphone?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt_5_mac?: { childImageSharp?: { gatsbyImageData: any } | null } | null, make_smarter?: { childImageSharp?: { gatsbyImageData: any } | null } | null, trade_what_you_want?: { childImageSharp?: { gatsbyImageData: any } | null } | null, how_you_want?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stocks_zero_fees?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stocks_blue_chip?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stocks_blue_chip_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_52_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_52_Query = { mainHeaderImage?: { childImageSharp?: { gatsbyImageData: any } | null } | null, mainHeaderImageMobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_53_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_53_Query = { dbot_strategy?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dbot_build_strategy?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dbot_maximise_profits?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dbot_track_your_performance?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dbot_get_integrated_help?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dbot_save_your_strategies?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt_5_ipad_iphone?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt_5_mac?: { childImageSharp?: { gatsbyImageData: any } | null } | null, make_smarter?: { childImageSharp?: { gatsbyImageData: any } | null } | null, trade_what_you_want?: { childImageSharp?: { gatsbyImageData: any } | null } | null, how_you_want?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stocks_zero_fees?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stocks_blue_chip?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_54_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_54_Query = { stocks_banner?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stocks_banner_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_55_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_55_Query = { p2p_hero_background?: { childImageSharp?: { gatsbyImageData: any } | null } | null, p2p_hero_background_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_56_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_56_Query = { login?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt5_acc?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt5_login?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_57_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_57_Query = { p2p_hero_background?: { childImageSharp?: { gatsbyImageData: any } | null } | null, p2p_hero_background_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_58_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_58_Query = { buy_sell?: { childImageSharp?: { gatsbyImageData: any } | null } | null, local_currency?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_59_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_59_Query = { qr_code?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_60_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_60_Query = { buy_sell?: { childImageSharp?: { gatsbyImageData: any } | null } | null, local_currency?: { childImageSharp?: { gatsbyImageData: any } | null } | null, web_and_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_61_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_61_Query = { p2p_hero_background?: { childImageSharp?: { gatsbyImageData: any } | null } | null, p2p_hero_background_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, p2p_hero_img?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_62_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_62_Query = { p2p_banner?: { childImageSharp?: { gatsbyImageData: any } | null } | null, p2p_banner_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_63_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_63_Query = { dmt5_synthetic_calculator?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt5_financial_calculator_one?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt5_financial_calculator_two?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt5_financial_stp_calculator_one?: { childImageSharp?: { gatsbyImageData: any } | null } | null, dmt5_financial_stp_calculator_two?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_64_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_64_Query = { image?: { childImageSharp?: { gatsbyImageData: any } | null } | null, image_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_65_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_65_Query = { multiple_income_opportunities?: { childImageSharp?: { gatsbyImageData: any } | null } | null, daily_ib_commission?: { childImageSharp?: { gatsbyImageData: any } | null } | null, marketing_material?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_66_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_66_Query = { payment_agent?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_67_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_67_Query = { view_email?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_68_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_68_Query = { margin_relationship_piechart?: { childImageSharp?: { gatsbyImageData: any } | null } | null, margin_mobile_relationship_piechart?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_69_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_69_Query = { example?: { childImageSharp?: { gatsbyImageData: any } | null } | null, example_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_70_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_70_Query = { multiplier_market?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_trade_type?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_stake?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_value?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_take_profit?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_stop_loss?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_deal_cancellation?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_purchase?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_market_eu?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_trade_type_eu?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_value_eu?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_71_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_71_Query = { stake_amount?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_no_multi_loss?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_no_multi_win?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_with_multi_loss?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_with_multi_win?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_no_multi_loss_eu?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_no_multi_win_eu?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_with_multi_loss_eu?: { childImageSharp?: { gatsbyImageData: any } | null } | null, multiplier_with_multi_win_eu?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_72_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_72_Query = { option_market?: { childImageSharp?: { gatsbyImageData: any } | null } | null, option_trade_type?: { childImageSharp?: { gatsbyImageData: any } | null } | null, option_duration?: { childImageSharp?: { gatsbyImageData: any } | null } | null, option_stake?: { childImageSharp?: { gatsbyImageData: any } | null } | null, option_quote?: { childImageSharp?: { gatsbyImageData: any } | null } | null, option_purchase?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_73_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_73_Query = { margin?: { childImageSharp?: { gatsbyImageData: any } | null } | null, swap?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pip?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pnl_margin?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pnl_multipliers?: { childImageSharp?: { gatsbyImageData: any } | null } | null, margin_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, swap_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pip_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pnl_margin_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pnl_multipliers_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_74_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_74_Query = { margin_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, margin_info?: { childImageSharp?: { gatsbyImageData: any } | null } | null, margin_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_75_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_75_Query = { pip_value_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pip_value_forex_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pip_value_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, pip_value_forex_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_76_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_76_Query = { stop_loss_level_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stop_loss_level_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stop_loss_pip_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stop_loss_pip_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, take_profit_level_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, take_profit_level_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, take_profit_pip_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, take_profit_pip_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_77_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_77_Query = { stop_loss_level_up_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stop_loss_level_up_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stop_loss_amount_down_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, stop_loss_amount_down_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, take_profit_level_down_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, take_profit_level_down_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, take_profit_amount_up_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, take_profit_amount_up_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_78_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_78_Query = { swap_synthetic_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, swap_forex_formula?: { childImageSharp?: { gatsbyImageData: any } | null } | null, swap_synthetic_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null, swap_forex_formula_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_79_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_79_Query = { antony?: { childImageSharp?: { gatsbyImageData: any } | null } | null, derek?: { childImageSharp?: { gatsbyImageData: any } | null } | null, gary?: { childImageSharp?: { gatsbyImageData: any } | null } | null, jennice?: { childImageSharp?: { gatsbyImageData: any } | null } | null, jeya?: { childImageSharp?: { gatsbyImageData: any } | null } | null, jy?: { childImageSharp?: { gatsbyImageData: any } | null } | null, joanna?: { childImageSharp?: { gatsbyImageData: any } | null } | null, louise?: { childImageSharp?: { gatsbyImageData: any } | null } | null, rakshit?: { childImageSharp?: { gatsbyImageData: any } | null } | null, raunak?: { childImageSharp?: { gatsbyImageData: any } | null } | null, seema?: { childImageSharp?: { gatsbyImageData: any } | null } | null, shyamala?: { childImageSharp?: { gatsbyImageData: any } | null } | null, tom?: { childImageSharp?: { gatsbyImageData: any } | null } | null, waqas?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_80_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_80_Query = { earth?: { childImageSharp?: { gatsbyImageData: any } | null } | null, earth_mobile?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_81_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_81_Query = { media1?: { childImageSharp?: { gatsbyImageData: any } | null } | null, media2?: { childImageSharp?: { gatsbyImageData: any } | null } | null, media3?: { childImageSharp?: { gatsbyImageData: any } | null } | null, media4?: { childImageSharp?: { gatsbyImageData: any } | null } | null, media5?: { childImageSharp?: { gatsbyImageData: any } | null } | null, media6?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type Unnamed_82_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_82_Query = { about_us_logo?: { childImageSharp?: { gatsbyImageData: any } | null } | null };

export type ArticleQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type ArticleQuery = { directus: { blog?: Array<{ id?: string | null, blog_title: string, meta_title?: string | null, meta_description?: string | null, og_title?: string | null, og_description?: string | null, test_data: boolean, published_date: any, blog_post?: string | null, author?: { id?: string | null, name: string, image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null, main_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, og_image?: { id?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, tags?: Array<{ id?: string | null, tags_id?: { id?: string | null, tag_name: string } | null } | null> | null, footer_banners?: { id?: string | null, cta_url: string, name: string, desktop_banner_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, mobile_banner_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null, side_banners?: { id?: string | null, cta_url: string, name: string, banner_image?: { id?: string | null, description?: string | null, imageFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null } | null> | null } };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
